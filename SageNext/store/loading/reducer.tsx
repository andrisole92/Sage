import * as loadingActions from './actions'
import {ILoadingState} from "./state";

const initialState: ILoadingState = {
    isLoading: false
};

export const loadingReducer = (state = initialState, action): ILoadingState => {
    switch (action.type) {
        case loadingActions.SET_LOADING:
            console.log(action);
            return {
                isLoading: action.isLoading
            };
        default:
            return state
    }
};
