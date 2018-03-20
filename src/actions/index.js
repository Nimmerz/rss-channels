export const FETCH_NEWS = 'FETCH_NEWS';
export const ERR_FETCH = 'ERR_FETCH';
export const PAGE_CHANGE = 'PAGE_CHANGE';
export const PAGE_CHANNEL = 'PAGE_CHANNEL';

import $ from 'jquery';

export function fetchNews(link) {
	const query = `https://query.yahooapis.com/v1/public/yql?q=select%20title%20from%20rss%20where%20url%3D%22${link}%22&format=json&diagnostics=true&callback=`
	const errObj = {type: ERR_FETCH, payload: 'Unable to fetch news from this link'};
	return function(dispatch) {
		$.ajax({
			dataType: "json",
			url: query,
			success: function(data) {
				if (data.query.results!==null){
					dispatch({type: FETCH_NEWS, payload: data.query.results.item});
				}else{
					dispatch(errObj);
				}
			},
			error: function(err) {
				dispatch(errObj);
			}
		});
	}
}

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