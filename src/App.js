import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

const App = () => {
    const onSearchSubmit = async (term) => {
        try {
            const params = {
                key: "bd516a21b339b45198db52801af10c11",
                q: term,
            };
            const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + ( params.q ) + "&APPID=" + ( params.key ));
            alert('今日の天気は' + ( response.data.weather[0].main ) + 'です。');
        } catch {}
    };
    return (
        <div className='ui container' style={{marginTop:'20px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
        </div>
    )
}

export default App;