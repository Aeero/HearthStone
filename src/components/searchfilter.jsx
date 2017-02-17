import React, { Component } from 'react';

import Icon from './icon';

import '../styles/searchfilter.css';
//
// <div className="searchfilter-option">
//   <div className="searchfilter-option-heros">
//     <ul>
//       <li><a href="">&nbsp;</a></li>
//       <li><a href="">&nbsp;</a></li>
//       <li><a href="">&nbsp;</a></li>
//       <li><a href="">&nbsp;</a></li>
//       <li><a href="">&nbsp;</a></li>
//       <li><a href="">&nbsp;</a></li>
//       <li><a href="">&nbsp;</a></li>
//       <li><a href="">&nbsp;</a></li>
//       <li><a href="">&nbsp;</a></li>
//     </ul>
//   </div>
// </div>

class SearchFilter extends Component {
  constructor() {
    super();
    this.onClick = (e) => {
      e.stopPropagation();
      window.history.back();
    };
  }
  render() {
    return (
      <div className="searchfilter">
        <div className="searchfilter-header">
          <div className="searchfilter-back" onClick={this.onClick}>
            <Icon iconCode="&#xe697;" />
          </div>
          <input type="text" placeholder="搜索卡片" />
          <Icon iconCode="&#xe651;" />
        </div>
      </div>
    );
  }
}

export default SearchFilter;
