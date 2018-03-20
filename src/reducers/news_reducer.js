import {FETCH_NEWS, ERR_FETCH, PAGE_CHANGE, PAGE_CHANNEL} from '../actions';
const defaultState = {err: '', newsItems: [], currentPage: 1, activeNew: null};
export default function (state = defaultState, action) {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_NEWS:
            return {newsItems: action.payload, err: '', currentPage: 1};
        case PAGE_CHANGE:
            return {...state, err: '', currentPage: action.payload};
        case ERR_FETCH:
            return {err: action.payload, newsItems: []};
        case PAGE_CHANNEL:
            return {...state, activeNew: action.payload};
    }
    return state;
};