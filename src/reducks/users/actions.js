// actionsはプレーンなオブジェクトで返す
// １定数を指定
export const SEARCH_INPUT = 'SEARCH_INPUT';
// ２純粋なデータだけ返す
export const searchInputAction = (userState) => {
    return {
        type: 'SEARCH_INPUT',
        payload: {
            requestCity: userState.requestCity,
            city: userState.city,
            response: userState.response
        }
    }
}
