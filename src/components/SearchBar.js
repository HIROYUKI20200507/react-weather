import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };
    return (
        <form onSubmit={onFormSubmit} className="ui form">
            <div className="field">
                <label>Weather Search</label>
                <input 
                    type="text" 
                    name="search" 
                    placeholder="都道府県を入力してください" 
                    value={term}
                    onChange={(event) => {
                        setTerm(event.target.value);
                    }}
                />
            </div>
            <button class="ui primary button">検索</button>
            <div>
                
            </div>
        </form>
    );
};

export default SearchBar;