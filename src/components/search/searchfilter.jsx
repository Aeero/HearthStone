import React, { Component } from 'react';

import Icon from '../icon';

import '../../styles/searchfilter.css';
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
        <div className="searchfilter-toggle">
          <button><Icon iconCode="&#xe6a5;" width="100%" height="100%" /></button>
        </div>
        <div className="searchfilter-heros">
          <ul>
            <li /><li /><li /><li /><li /><li /><li /><li /><li />
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchFilter;
