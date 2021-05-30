import { fork } from 'redux-saga/effects'

function* connectResult() {
    console.log('呼び出せてる？')
}

export default function* callSaga() {
    yield fork(connectResult);
}
