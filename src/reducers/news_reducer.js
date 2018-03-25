import {FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR, PAGE_CHANGE, PAGE_CHANNEL} from '../actions';
const defaultState = {err: '', newsItems: [], currentPage: 1, activeNew: null};
export default function (state = defaultState, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_NEWS_REQUEST:
            return {...state};
        case FETCH_NEWS_SUCCESS:
            return {newsItems: action.response.query.results.item, err: '', currentPage: 1};
        case FETCH_NEWS_ERROR:
            return 'Error from response';
        case PAGE_CHANGE:
            return {...state, err: '', currentPage: action.payload};
        case PAGE_CHANNEL:
            return {...state, activeNew: action.payload};
    }
    return state;
};