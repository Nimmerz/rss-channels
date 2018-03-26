export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';
export const ERR_FETCH = 'ERR_FETCH';
export const PAGE_CHANGE = 'PAGE_CHANGE';
export const PAGE_CHANNEL = 'PAGE_CHANNEL';
import {get, post, put, remove} from '../api/index';



export const fetchNews = (link) => (dispatch) => {
    return dispatch ({
        CALL_API: {
            types: [
                FETCH_NEWS_REQUEST,
                FETCH_NEWS_SUCCESS,
                FETCH_NEWS_ERROR,
            ],
            endpoint: () => get(`https://query.yahooapis.com/v1/public/yql?q=select%20title%20from%20rss%20where%20url%3D%22${link}%22&format=json&diagnostics=true`, {})
        },
    });
};


export function changePage(numb) {
    return {
        type: PAGE_CHANGE,
        payload: numb
    }
}

export function setActiveNew(item) {
    return {
        type: PAGE_CHANNEL,
        payload: item
    }
}