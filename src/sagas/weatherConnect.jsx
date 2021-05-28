import { fork } from 'redux-saga/effects'

function* connectResult() {
    console.log('呼び出された')
}

export function* callSaga() {
    yield fork(connectResult)
}
