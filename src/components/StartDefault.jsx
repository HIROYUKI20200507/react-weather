import React, { useState } from "react";
import axios from 'axios';
import SearchButton from "./SearchButton";

class StartDefault extends React.Component {
    constructor(props) {
        super(props);

        const GEOCODE_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather?q=' + (props.isPlace) + "&APPID=" + "bd516a21b339b45198db52801af10c11";

    axios
    .get(GEOCODE_ENDPOINT, { params: { address: props.isPlace } })
        .then((results) => {
            const data = results.data;
            const result = data.weather[0];
            const newWeather = result.main;
            console.log(newWeather + '天気情報');
            this.setState({
                isWeather: newWeather + '天気情報'
            })
        })

        .catch(() => {
            console.log('通信に失敗しました。');
        });
    }

    handleChange = (e) => {
        this.setState({
            isPlace:  e.target.value
        })
        console.log('stateの中身');
        console.log(this.state);
    }


    render() {
        return (
            <div className="app">
                <form className="ui form">
                    <div className="field">
                        <label>
                            Weather Search
                        </label>
                            <input
                                type="text"
                                // value={this.props.isPlace}
                                placeholder="都道府県を入力してください"
                                onChange={this.handleChange}
                                />
                    </div>
                    <SearchButton
                        class="ui primary button"
                        isPlaceAdd = {() => this.handleChange()}
                        toggle={this.props.isWeather}
                    />
                </form>
            </div>
        );
    }
}

export default StartDefault;