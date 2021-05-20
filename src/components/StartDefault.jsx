import React from 'react';
import axios from "axios";
import {Button, TextField} from "@material-ui/core";

const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast';

export default class StartDefault extends React.Component {
    constructor(props) {
        super(props);
        // 初期stateを設定
        this.state = {
            apiKey : '47b3630b308ec48d5500f001df566669',
            requestCity: '東京',
            city: 'tokyo',
            response : []
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleGetWeather = this.handleGetWeather.bind(this);
    }
    // 天気情報の取得
    handleGetWeather(){
        axios
            .get(API_ENDPOINT, {
                params: {
                    q: this.state.requestCity,
                    APPID: this.state.apiKey
                } })
            .then(res => {
                // stateへresponseとcityを更新
                this.setState({
                    response: res.data.list,
                    city: res.data.city.name
                });
            })
            // エラーの場合描画
            .catch(function (error) {
                console.log(error);
            });
    }
    // ライフサイクルメソッドで全体描画時、関数呼び出し
    componentDidMount() {
        this.handleGetWeather()
    }

    // render内だと無限ループになるため、関数は外で定義
    handleInput({ target: { value } }) {
        this.setState({
            requestCity: value
        });
    }
    render() {
        // stateが渡ってきているか確認
        console.log(this.state.response);
        return (
            <div style={{margin: '100px'}}>
                <h1>お天気検索</h1>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    type="text"
                    // 入力した情報をstateへ渡す
                    value={this.state.requestCity}
                    // 関数呼び出し
                    onChange={this.handleInput}
                />
                {/* クリックしたら天気情報の取得 */}
                <Button
                    onClick={this.handleGetWeather}
                    variant="contained"
                    color="primary"
                    >Search
                </Button>
                {/* クリックしたら場所情報の取得 */}
                <p> Location: {this.state.city} </p>
                {/* map関数 */}
                {Object.keys(this.state.response).map(key => (
                    <li key={key}>
                        {this.state.response[key].dt_txt}
                        {/* this.state.response[key].weather[0]で天気情報を取得 */}
                        ,<img src={'http://openweathermap.org/img/w/'+this.state.response[key].weather[0].icon+'.png'} />
                        {this.state.response[key].weather[0].main}
                    </li>
                ))}
            </div>
        );
    }
}