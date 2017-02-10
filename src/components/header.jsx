import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import { sider, bottom } from '../action/action';
import '../styles/header.css';

class Header extends Component {
  static propTypes = {
    curPage: React.PropTypes.string.isRequired,
    onSideClick: React.PropTypes.func.isRequired,
    onMoresClick: React.PropTypes.func.isRequired
  }
  render() {
    const { curPage, onSideClick, onMoresClick } = this.props;
    return (
      <header>
        <div className="header-container">
          <div className="header-left fl">
            { curPage === 'main' ?
              <div className="header-menu" onClick={onSideClick}>
                <i className="iconfont">&#xe65d;</i>
              </div>
              :
              <div className="header-back">
                <i className="iconfont">&#xe697;</i>
              </div>
            }
          </div>
          <div className="header-title">title</div>
          <div className="header-right fr">
            <div className="header-search">
              <i className="iconfont">&#xe651;</i>
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

function mapStateToProps(state) {
  return {
    value: state.count,
    curPage: state.currentPage
  };
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
  mapStateToProps,
  mapDispatchToProps
)(Header);
