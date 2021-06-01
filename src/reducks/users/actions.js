// actionsはプレーンなオブジェクトで返す

import { useState } from "react";

// １定数を指定
export const SEARCH_INPUT = 'SEARCH_INPUT';
// ２純粋なデータだけ返す
export const searchInputAction = (userState) => {
    console.log(userState)
    return {
        type: 'SEARCH_INPUT',
        payload: {
            requestCity: userState.requestCity,
            city: userState.city,
            response: userState.response
        }
    }
};

export const successCountryApi = (res) => {
    return {
        response: res.data.list,
        city: res.data.city.name
    }
}
