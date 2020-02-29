import List from "../components/List";
import {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import ApiService from "../api/api.service";
import AppLayout from "../components/layouts/AppLayout";

import {ListEntity, ListItemEntity} from "../sdk-fetch/models";
import {ToastType} from "../store/toast/state";

import {SetItems, SetListId} from "../store/list/actions";
import {SetToast} from "../store/toast/actions";
import {SetLoading} from "../store/loading/actions";


import './index.scss'


interface Props {
    listId?: ListItemEntity[];
    items?: ListItemEntity[];
    query?: any;
    SetItems: any;
    SetListId: any;
}

class Home extends Component<Props> {
    static async getInitialProps({req, res, query, store}) {
        if (query && query.id) {
            if (query.new) {
                store.dispatch(SetToast({open: true, message: 'New List Created!', type: ToastType.Info}));
            }
            try {
                let list: ListEntity = await ApiService.fetchOneList(query.id);
                store.dispatch(SetListId(list.id));
                store.dispatch(SetItems(list.items));
            } catch (e) {
                store.dispatch(SetToast({open: true, message: 'Can\'t find list', type: ToastType.Error}));
            }

        } else {
            try {
                let newList: ListEntity = await ApiService.create();
                res.writeHead(301, {
                    Location: '/?id=' + newList.id + '&new=true'
                });
                res.end();
            } catch (e) {
                store.dispatch(SetToast({open: true, message: 'Can\'t connect to the server', type: ToastType.Error}));

            }

            // store.dispatch(SetLoading(false));
            // store.dispatch(SetToast({open: false, message: '', type: ToastType.Info}));
            // store.dispatch(SetListId(newList.id));
            // store.dispatch(SetItems([]));
        }
        return {listId: query.id, query}
    }
    componentDidMount(): void {
    }


    render() {
        console.log(process.env.BACKEND);
        return (
            <AppLayout>
                <div>
                    {this.props.query.id ? <List/> : <div>
                        <h1>Browse Lists</h1>
                    </div>}
                </div>
            </AppLayout>

        );
    }
}

const mapStateToProps = (state) => ({
    items: state.list.items,
    listId: state.list.id
});

const mapDispatchToProps = (dispatch) => ({
    SetLoading: bindActionCreators(SetLoading, dispatch),
    SetItems: bindActionCreators(SetItems, dispatch),
    SetListId: bindActionCreators(SetListId, dispatch),

});
export default connect(mapStateToProps, mapDispatchToProps)(Home)

