// @flow
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {compose} from 'redux';

class ListItems extends Component {

    handleOnClick = (path) => () => {
        this.props.history.push(path);
    };


    renderMenuItem = (item) => {
        const {location: {pathname} = {}} = this.props;
        const {path, name} = item;
        return (
            <li onClick={this.handleOnClick(path)}
                className={pathname === path ? 'list-item active' : 'list-item'}>
                {name}
            </li>
        )
    };

    render() {
        const menu = [
            {
                id: 1,
                path: 'http://rss.cnn.com/rss/edition.rss',
                name: 'http://rss.cnn.com/rss/edition.rss',
            },
            {
                id: 2,
                path: 'http://feeds.reuters.com/reuters/businessNews',
                name: 'http://feeds.reuters.com/reuters/businessNews'
            },
            {
                id: 3,
                path: 'https://news.yahoo.com/rss/',
                name: 'https://news.yahoo.com/rss/',
            },
            {
                id: 4,
                path: 'http://feeds.abcnews.com/abcnews/topstories',
                name: 'http://feeds.abcnews.com/abcnews/topstories'
            }
        ];
        return (
            <div>
                <div>
                    <ul className="list">
                        {menu.map(this.renderMenuItem, this)}
                    </ul>
                </div>
            </div>
        );
    }
};


export default ListItems;