import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {listReducer} from "./list/reducer";
import {toastReducer} from "./toast/reducer";
import {loadingReducer} from "./loading/reducer";


import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
};


const rootReducer = combineReducers({list: listReducer, toast: toastReducer, loading: loadingReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store;

export const initStore = (initialState) => {
    // let store;
    //
    // store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
    // store['__PERSISTOR'] = persistStore(store);
    // return store;

    const isClient = typeof window !== 'undefined';

    if (isClient) {
        const {persistReducer} = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;
        const persistConfig = {
            key: 'root',
            storage
        };
        store = createStore(
            persistReducer(persistConfig, rootReducer),
            initialState,
            composeWithDevTools(applyMiddleware(thunkMiddleware))
        );
        // store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
        // store.__PERSISTOR = persistStore(store);
    } else {
        store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
    }

    return store;
    // return {store, persistor}
};

export default store;
