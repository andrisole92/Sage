export const SET_LOADING = '[Loading] Set';


export const SetLoading = (isLoading: boolean) => dispatch => {
    return dispatch({type: SET_LOADING, isLoading})
};
