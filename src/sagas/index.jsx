import { fork } from "redux-saga/effects";
import callSaga from "./weatherConnect";

export function* rootSaga() {
    yield fork(callSaga)
}