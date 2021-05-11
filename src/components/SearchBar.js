import React from 'react';

const SearchBar = () => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('onSubmit');
    };
    return (
        <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
            <label>Weather Search</label>
            <input type="text" name="first-name" placeholder="都道府県を入力してください" />
        </div>
        </form>
    );
};

export default SearchBar;