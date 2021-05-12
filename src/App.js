import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

const App = () => {
    
    window.onload = async () => {
        const def = document.getElementById('default');
        const new_def = document.createElement('h2');
        
        const params = {
            key: "bd516a21b339b45198db52801af10c11",
            q: "東京",
        };
        const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + ( params.q ) + "&APPID=" + ( params.key ));
        
        def.textContent = ( response.data.weather[0].main );
        def.appendChild(new_def);
    };

    const onSearchSubmit = async (term) => {
        try {
            const stage = document.getElementById('stage');
            const def = document.getElementById('default');
            const new_stage = document.createElement('h1');
            const new_def = document.createElement('h2');
    
            const params = {
                key: "bd516a21b339b45198db52801af10c11",
                q: term
            };
            const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + ( params.q ) + "&APPID=" + ( params.key ));
            
            stage.textContent = ( term );
            console.log(response);
            def.textContent = ( response.data.weather[0].main );
            stage.appendChild(new_stage);
    
        } catch {}
    };
    return (
        <div className='ui container' style={{marginTop:'20px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
            <div>
                <h1 id="stage">東京</h1>
                <h1 id="default"></h1>
            </div>
        </div>
    )
}

export default App;