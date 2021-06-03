import {
    createStore as reduxCreateStore,
    combineReducers,
} from 'redux';
// import { productsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";

export default function createStore() {
    return reduxCreateStore( //reduxのcreateStoreメソッドの別名
        // combineReducersでオブジェクトガッチャンコ
        combineReducers({
            // products: productsReducer,
            users: UsersReducer,
        })
    )
}
