import {
    createStore as reduxCreateStore,
    combineReducers, applyMiddleware
} from 'redux';
// import { productsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";
import { createSagaMiddleware } from "redux-saga";
import { rootSaga } from "src/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);

export default function createStore() {
    return reduxCreateStore( //reduxのcreateStoreメソッドの別名
        // combineReducersでオブジェクトガッチャンコ
        combineReducers({
            // products: productsReducer,
            users: UsersReducer,
        })
        )
}
