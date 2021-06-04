import React, { useEffect } from 'react';
import { Button, TextField } from "@material-ui/core";
import { searchInputAction } from "../reducks/users/actions";
import { useDispatch,useSelector } from "react-redux";


export const StartDefault = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)

    useEffect(() => {
        dispatch(searchInputAction({
            requestCity: '東京'
        }));
    },selector.apiKey)

    const resultSubmit = (event) => {
        dispatch(searchInputAction({
            requestCity: event.target.input.value
        }));
        event.preventDefault()
    }

    return (
        <div className="weather-list">
            <h1>お天気検索</h1>
            <form onSubmit = {resultSubmit}>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    type="text"
                    name="input"
                    />
                <Button
                    className="weather-list-button"
                    type="submit"
                    variant="contained"
                    color="primary"
                    >Search
                </Button>
            </form>
            <p> Location: {selector.city} </p>
            {selector.response && Object.keys(selector.response).map(key => (
                <li key={key}>
                {selector.response[key].dt_txt}
                    ,<img src={'http://openweathermap.org/img/w/'+selector.response[key].weather[0].icon+'.png'} />
                    {selector.response[key].weather[0].main}
                </li>
            ))}
        </div>
    );
}
    export default StartDefault;
