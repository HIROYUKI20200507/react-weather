// actionsはプレーンなオブジェクトで返す
// １定数を指定
export const SEARCH_INPUT = 'SEARCH_INPUT';
export const SUCCESS_COUNTRY_API = 'SUCCESS_COUNTRY_API';
// ２純粋なデータだけ返す
export const searchInputAction = (userState) => {
    console.log(userState,'userState')
    return {
        type: 'SEARCH_INPUT',
        payload: {
            requestCity: userState.requestCity,
        }
    }
};

export const successCountryApi = (res) => {
    console.log(res,'res')
    return {
        type: SUCCESS_COUNTRY_API,
        payload: {
            response: res.data.list,
            city: res.data.city.name
        }
    }
};

export const successCountryApi = (res) => {
    console.log(res,'res')
    return {
        type: SUCCESS_COUNTRY_API,
        payload: {
            response: res.data.list,
            city: res.data.city.name
        }
    }
}
