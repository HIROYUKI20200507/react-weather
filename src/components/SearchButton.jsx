import React from "react";

const SearchButton = (props) => {
    console.log(props)

    return (
        <div>
            <button
                checked={props.isPlace} onClick={() => props.toggle()}
            >検索</button>
            <div>
                場所：{props.isPlace}
            </div>
            <div>
                場所：{props.isWeather}
            </div>
        </div>
    )
};

export default SearchButton;