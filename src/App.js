import React, { Component } from 'react';
import StartDefault from './components/StartDefault';
import SearchButton from './components/SearchButton';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isPlace : '東京',
            isWeather : ''
        }
    }


    render() {
        return (
        //returnの中にJSXを記載
            <div>
                <StartDefault
                    isPlace = {this.state.isPlace}
                    isWeather = {this.state.isWeather}
                    />
            </div>
        );
    }
}

export default App;