import * as toastActions from './actions'
import {IToastState, ToastType} from "./state";

const initialState: IToastState = {
    open: false,
    type: ToastType.Info,
    message: ''
};

export const toastReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case toastActions.SET_TOAST:
            return action.toast;
        default:
            return state
    }
};
