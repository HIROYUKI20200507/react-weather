import { searchInputAction, successCountryApi } from "../reducks/users/actions";
import { put, call, takeEvery } from 'redux-saga/effects'
import { useSelector } from "react-redux";
import axios from "axios";

const WeatherConnect = () => {
    const selector = useSelector((state) => state)
    console.log('呼び出せてる？')

    const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast';
    return axios
    .get(API_ENDPOINT, {
        params: {
            q: selector.requestCity,
            APPID: selector.apiKey
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
    const { country, error } = yield call(WeatherConnect)

    if (country) {
        yield put(successCountryApi(country))
    } else {
        yield put(console.log(error))
    }
}

    export const callSaga = [takeEvery(searchInputAction, fetchCountry)]
