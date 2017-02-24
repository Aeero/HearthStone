import React, { Component } from 'react';
import { Link } from 'react-router';

import Icon from '../icon';

import '../../styles/feature.css';

class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <ul>
          <li>
            <Link to="/search">
              <Icon iconCode="&#xe95f;" text="卡牌检索" color="#2b2b2b" />
            </Link>
          </li>
          <li>
            <Link to="/newdeck">
              <Icon iconCode="&#xe88a;" text="组建套牌" color="#2b2b2b" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feature;
