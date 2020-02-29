import {IToastState} from "./state";

export const SET_TOAST = '[Toast] Set';


export const SetToast = (toast: IToastState) => dispatch => {
    return dispatch({type: SET_TOAST, toast})
};
