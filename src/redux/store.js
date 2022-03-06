import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers/bookReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    book: bookReducer
});

const store = createStore(rootReducer,composeWithDevTools());

export default store;