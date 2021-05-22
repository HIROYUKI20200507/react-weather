import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
// import * as serviceWorler from "./serviceWorler";
import App from './App';

export const store = createStore();

ReactDOM.render(
    // Providerの役割はラップしたコンポーネントにstoreの情報を渡す
    // Providerの役割はReact-reduxのconnect関数を使えるようにする
    // connect関数とはreactとreduxを接続してstoreを変更できるようにする
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'));
