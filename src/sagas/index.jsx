import { all } from 'redux-saga/effects'
import { callSaga } from './weatherConnect'

export default function* rootSaga() {
    yield all([...callSaga])
}