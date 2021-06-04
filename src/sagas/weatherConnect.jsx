import { searchInputAction, successCountryApi } from "../reducks/users/actions";
import { put, call, takeEvery, select } from 'redux-saga/effects'
import axios from "axios";

const WeatherConnect = (state) => {
    const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast';
    return axios
    .get(API_ENDPOINT, {
        params: {
            q: state.requestCity,
            APPID: state.apiKey
        }
    })
    .then(res => {
        const country = res
        return { country }
    })
    // エラーの場合描画
    .catch(function (error) {
        return { error }
    });
}

function* fetchCountry() {
    const state = yield select();
    console.log(state)
    const { country, error } = yield call(WeatherConnect, state)

    if (country) {
        yield put(successCountryApi(country))
    } else {
        yield put(console.log(error))
    }
}

    export const callSaga = [takeEvery(searchInputAction, fetchCountry)]
