import React, { Component } from 'react';

import Icon from './icon';

import '../styles/searchheader.css';

class SearchHeader extends Component {
  constructor() {
    super();
    this.onClick = (e) => {
      e.stopPropagation();
      window.history.back();
    };
  }
  render() {
    return (
      <div className="searchheader">
        <div className="searchheader-back" onClick={this.onClick}>
          <Icon iconCode="&#xe697;" />
        </div>
        <input type="text" placeholder="搜索卡片" />
        <Icon iconCode="&#xe651;" />
      </div>
    );
  }
}

export default SearchHeader;
