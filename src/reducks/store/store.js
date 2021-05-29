import {
    createStore as reduxCreateStore,
    combineReducers, applyMiddleware
} from 'redux';
// import { productsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../../sagas/index";

export default function createStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        UsersReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga);

    return reduxCreateStore( //reduxのcreateStoreメソッドの別名
        // combineReducersでオブジェクトガッチャンコ
        combineReducers({
            // products: productsReducer,
            users: UsersReducer,
        })
        )
}
