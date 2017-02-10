import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li className="active">
            <Link to="/news">资讯</Link>
          </li>
          <li>
            <Link to="/decks">卡组速递</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
