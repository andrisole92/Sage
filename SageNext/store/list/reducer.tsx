import * as listActions from './actions'
import {IListState} from "./state";
import {ListItemEntity} from "../../sdk-fetch/models";

const initialState: IListState = {
    id: '',
    items: []
};

export const listReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case listActions.SET_ID:
            return {
                ...state,
                id: action.id
            };
        case listActions.SET_ITEMS:
            return {
                ...state,
                items: action.items
            };
        case listActions.ADD_LIST_ITEM:
            return {
                ...state,
                items: [...state.items, action.item]
            };
        case listActions.REMOVE_LIST_ITEM:
            let newItems = state.items.filter((item: ListItemEntity) => item.id !== action.id);
            return {
                ...state,
                items: newItems
            };
        case listActions.REORDER_LIST:
            return {
                ...state,
                items: action.items
            };
        case listActions.CLEAR_LIST:

            return {
                ...state,
                items: []
            };
        default:
            return state
    }
};
