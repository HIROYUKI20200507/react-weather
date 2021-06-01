import {
    createStore as reduxCreateStore,
    applyMiddleware
} from 'redux';
import { UsersReducer } from "../users/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../sagas/index";

export default function createStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = reduxCreateStore(
        UsersReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga);

    return store
}
