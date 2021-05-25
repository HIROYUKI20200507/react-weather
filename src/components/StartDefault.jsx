import React from 'react';
import axios from "axios";
import {Button, TextField} from "@material-ui/core";
import { searchInputAction } from "../reducks/users/actions";
import { useDispatch,useSelector } from "react-redux";

const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast';

export const StartDefault = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)

    const handleGetWeather = () => {
        axios
        .get(API_ENDPOINT, {
                params: {
                    q: selector.users.requestCity,
                    APPID: selector.users.apiKey
                } })
        .then(res => {
            dispatch(searchInputAction({
                response: res.data.list,
                city: res.data.city.name
            }));
            console.log(selector.users);
        })
        // エラーの場合描画
        .catch(function (error) {
            console.log(selector.users);
            console.log(error);
        });
    }
    handleGetWeather()

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>お天気検索</h1>
            <div>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    type="text"
                    onChange = {(event) =>
                        dispatch(searchInputAction({
                            requestCity: event.target.value
                    }))}
                />
                <Button
                    onClick={handleGetWeather}
                    type="submit"
                    variant="contained"
                    color="primary"
                    >Search
                </Button>
            </div>
            <p> Location: {selector.users.city} </p>
            {Object.keys(selector.users.response).map(key => (
                <li key={key}>
                    {selector.users.response[key].dt_txt}
                    ,<img src={'http://openweathermap.org/img/w/'+selector.users.response[key].weather[0].icon+'.png'} />
                    {selector.users.response[key].weather[0].main}
                </li>
            ))}
        </div>
    );
}
export default StartDefault;

