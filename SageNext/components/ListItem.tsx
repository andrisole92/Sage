import {CircularProgress} from "@material-ui/core";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {DeleteListItem} from "../store/list/actions";

import {SetToast} from "../store/toast/actions";
import {IToastState, ToastType} from "../store/toast/state";
import ApiService from "../api/api.service";

import styled from 'styled-components';


interface ListItemProps {
    isLoading?: boolean;
    id?: string;
    children?: any;
    DeleteItem?: (id: string) => {};
    SetToast?: (toats: IToastState) => {};
}


const ListItemWrapper = styled.div`
   border: 1px solid gainsboro;
   border-radius: 4px;
   padding: 8px;
   z-index: 9999;
   // margin-top: 12px;

`;

const CloseIcon = styled.span`
  float: right;
   &:hover{
    cursor: pointer;
    color:red;
   }
`;

const LoadingSpinner = styled.span`
  float: right;
`;

const ListItem = ({isLoading, id, children, DeleteItem, SetToast}: ListItemProps) => (
    <ListItemWrapper>
        {children}
        {isLoading ?
            <LoadingSpinner>
                <CircularProgress size={10}/>
            </LoadingSpinner> :
            <CloseIcon onClick={async () => {
                let yes = confirm(`Delete item with id: ${id}?`);
                if (yes) {
                    try {
                        let result = await ApiService.listApi.listControllerRemoveItem({removeItemDTO: {itemId: id}});
                        console.log(result);
                        DeleteItem(id);
                    } catch (e) {
                        SetToast({type: ToastType.Error, message: e, open: true})
                    }
                }
            }}>&times;</CloseIcon>}


    </ListItemWrapper>
);
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    DeleteItem: bindActionCreators(DeleteListItem, dispatch),
    SetToast: bindActionCreators(SetToast, dispatch),

});
export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
