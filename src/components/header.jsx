import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { Link } from 'react-router';

import { sider, bottom } from '../action/action';
import '../styles/header.css';

class Header extends Component {
  static propTypes = {
    onSideClick: React.PropTypes.func.isRequired,
    onMoresClick: React.PropTypes.func.isRequired
  }
  render() {
    const { onSideClick, onMoresClick } = this.props;
    return (
      <header>
        <div className="header-container">
          <div className="header-left fl">
            <div className="header-menu" onClick={onSideClick}>
              <i className="iconfont">&#xe65d;</i>
            </div>
          </div>
          <div className="header-title">炉石社区</div>
          <div className="header-right fr">
            <div className="header-search">
              <Link to="/search">
                <i className="iconfont">&#xe651;</i>
              </Link>
            </div>
            <div className="header-mores" onClick={onMoresClick}>
              <i className="iconfont">&#xe62c;</i>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSideClick: (event) => {
      event.stopPropagation();
      dispatch(sider(true));
    },
    onMoresClick: (event) => {
      event.stopPropagation();
      dispatch(bottom(1));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Header);
