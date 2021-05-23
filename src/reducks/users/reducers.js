import * as Actions from "./actions";
import initialState from "../store/initialState";

// 第一引数に初期状態のinitialState
// 第二引数にactionがreturn（純粋なオブジェクト）した値
export const UsersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case Actions.SEARCH_INPUT:
            return {
                //スプレット構文でactions.jsの内容をオブジェクトとして展開
                // ...stateで初期状態のオブジェクトも一緒に展開しないと、actionsで渡ってきていないオブジェクトが消える
                ...state,
                ...action.payload
            }
            default:
                return state
            }
    console.log(action);
}