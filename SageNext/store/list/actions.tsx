import {ListItemEntity} from "../../sdk-fetch/models";


export const SET_ID = '[List] set id';
export const SET_ITEMS = '[List] set items';
export const ADD_LIST_ITEM = '[List] add item';
export const REMOVE_LIST_ITEM = '[List] remove item';
export const REORDER_LIST = '[List] reorder';
export const CLEAR_LIST = '[List] clear';

export const SetListId = (id: string) => dispatch => {
    return dispatch({type: SET_ID, id})
};


export const SetItems = (items: ListItemEntity[]) => dispatch => {
    return dispatch({type: SET_ITEMS, items})
};


export const AddListItem = (item: ListItemEntity) => dispatch => {
    return dispatch({type: ADD_LIST_ITEM, item})
};

export const DeleteListItem = (id: any) => dispatch => {
    return dispatch({type: REMOVE_LIST_ITEM, id})
};

export const ReorderList = (items: any) => dispatch => {
    return dispatch({type: REORDER_LIST, items})
};

export const ClearList = () => dispatch => {
    return dispatch({type: CLEAR_LIST})
};
