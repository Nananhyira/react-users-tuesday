import { legacy_createStore as createStore, applyMiddleware } from "redux";
import UsersReducer from "../reducers/UsersReducer";
import thunk from "redux-thunk"

let Store = createStore(UsersReducer, applyMiddleware(thunk))

export default Store;
