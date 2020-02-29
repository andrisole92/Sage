import * as React from "react";
import ListItem from "./ListItem";
import {bindActionCreators} from "redux";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {connect} from "react-redux";
import {AddListItem, ClearList, ReorderList, SetItems, SetListId} from "../store/list/actions";
import './List.scss';
import ApiService from "../api/api.service";
import {useState} from "react";
import {SetToast} from "../store/toast/actions";
import {ToastType} from "../store/toast/state";
import {ListItemEntity} from "../sdk-fetch/models";
import {resetServerContext} from 'react-beautiful-dnd';
import styled from 'styled-components';

interface ListProps {
    items: ListItemEntity[];
    listId: string;
    ReorderList: any;
    SetToast: any;
    AddListItem: any;
    ClearList: any;
    SetItems: any;
}

const Button = styled.button`
    line-height: 35px;
    padding: 0 18px;
    border: 1px solid gainsboro;
    background: transparent;
    border-radius: 4px;
    user-select: none;
    outline: none;
        touch-action: manipulation;

    &:hover{
      cursor: pointer;
    }
`;

const FullButton = styled(Button)`
  width: 100%;
`;

const Input = styled.input`
    font-size: 16px;
    line-height: 35px;
    padding: 0 18px;
    border: 1px solid gainsboro;
    border-radius: 4px;
    user-select: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;

`;

const InputForm = styled.form`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: auto 80px;
  margin-bottom: 12px;
`;

const List = (props: ListProps) => {
    resetServerContext();
    const [title, setTitle] = useState('');
    const [itemsInProgress, setItemsInProgress] = useState([]);

    const AddNewItem = async (e) => {
        e.preventDefault();
        if (title === '') {
            alert('The Title can\'t be empty!');
            return;
        }

        let itemIndex = itemsInProgress.length;
        itemsInProgress.push(title);

        // api call
        try {
            console.log(props);
            let res: ListItemEntity = await ApiService.listApi.listControllerAddItem({
                addItemDTO: {
                    title: title,
                    listId: props.listId
                }
            });
            res.listId = props.listId;
            props.AddListItem(res);
            let newItems = itemsInProgress.slice();
            newItems[itemIndex] = null;
            if (newItems.filter(item => item !== null).length === 0) {
                console.log('no new items');
                newItems = [];
            }
            setItemsInProgress(newItems);
            props.SetToast({type: ToastType.Success, message: 'New item has beend added to the list.', open: true})
        } catch (error) {
            console.error(error);
        }

        setTitle('');
    };


    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const items = reorder(
            props.items,
            result.source.index,
            result.destination.index
        );

        props.ReorderList(items);
        props.SetToast({type: ToastType.Info, message: 'List Updated', open: true})
    };

    const OnClear = async (e) => {
        if (props.items.length < 1) {
            alert('The List is empty');
            return
        }
        let reset = confirm('Reset list?');
        if (reset) {
            try {
                await ApiService.listApi.listControllerClear({clearListDTO: {listId: props.listId}});
                props.SetToast({type: ToastType.Info, message: 'Listed cleared!', open: true});
                props.ClearList()
            } catch (e) {
                props.SetToast({type: ToastType.Error, message: e, open: true})
            }
        }
    };

    const itemsUploading = itemsInProgress ? itemsInProgress.map(item => item === null ? null :
        <ListItem isLoading={true}
                  key={item}>{item}</ListItem>) : null;
    return (
        <div>
            <h2>{props.listId}</h2>
            <div className={"add-new-item"}>
                <div>
                    <InputForm onSubmit={(e) => AddNewItem(e)}>
                        <Input placeholder="New Item Title" value={title}
                               onChange={(e) => setTitle(e.target.value)}/>
                        <Button type="submit">Add</Button>
                    </InputForm>
                </div>
                <div>
                    <FullButton type="button" onClick={(e) => OnClear(e)}>Clear</FullButton>
                </div>
                <div>
                    <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {props.items.map((item, index) => (
                                        <Draggable className={"list-item"} key={item.id} draggableId={item.id}
                                                   index={index}>
                                            {(provided, snapshot) => (
                                                <div className={"drag-card"}
                                                     ref={provided.innerRef}
                                                     {...provided.draggableProps}
                                                     {...provided.dragHandleProps}
                                                >
                                                    <ListItem id={item.id}>{item.title}</ListItem>
                                                </div>

                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    {itemsUploading}
                </div>
            </div>
        </div>
    );

};

const mapStateToProps = (state) => ({
    listId: state.list.id,
    items: state.list.items || []
});

const mapDispatchToProps = (dispatch) => ({
    SetItems: bindActionCreators(SetItems, dispatch),
    SetListId: bindActionCreators(SetListId, dispatch),
    ReorderList: bindActionCreators(ReorderList, dispatch),
    SetToast: bindActionCreators(SetToast, dispatch),
    AddListItem: bindActionCreators(AddListItem, dispatch),
    ClearList: bindActionCreators(ClearList, dispatch),

});
export default connect(mapStateToProps, mapDispatchToProps)(List)


