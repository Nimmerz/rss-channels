import { combineReducers } from 'redux';
import newsReducer from './news_reducer';

const rootReducer = combineReducers({
	news: newsReducer
});

export default rootReducer;
