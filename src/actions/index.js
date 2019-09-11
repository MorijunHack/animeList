import * as actionTypes from '../utils/actionTypes';
import axios from 'axios';

// 非同期
export const getAnimes = (year, cours) => {
    return (dispatch) => {
        dispatch(getAnimesRequest());

        // API: ShangriLa Anime API V1
        // https://qiita.com/AKB428/items/64938febfd4dcf6ea698
        // を利用させていただきました。素晴らしいAPI、大変感謝です。
        // SSL化していないサイトの場合はこのAPIは両方対応しているのでhttpに修正すること。
        return axios.get('https://api.moemoe.tokyo/anime/v1/master/' + year + '/' + cours)
        .then(response => dispatch(getAnimesSuccess(response.data)))
        .catch(error => dispatch(getAnimesFailure(error)))
    }
}

export function getAnimesRequest() {
    return {
        type: actionTypes.GET_ANIMES_REQUEST
    };
}

export function getAnimesSuccess(json) {
    return {
        type: actionTypes.GET_ANIMES_SUCCESS,
        items: json
    };
}

export function getAnimesFailure(error) {
    return {
        type: actionTypes.GET_ANIMES_FAILURE,
        error: error
    };
}


// 通知関連
export function setNotification(variant, message) {
    return {
        type: actionTypes.SET_NOTIFICATION,
        variant: variant,
        message: message
    };
}

export function closeNotification(){
    return {
        type: actionTypes.CLOSE_NOTIFICATION
    };
}