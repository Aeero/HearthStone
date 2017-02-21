import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import { Link } from 'react-router';
import Icon from './icon';

import { sider, bottom } from '../action/action';
import '../styles/header.css';

class Header extends Component {
  static propTypes = {
    menu: React.PropTypes.string,
    back: React.PropTypes.string,
    search: React.PropTypes.string,
    more: React.PropTypes.string,
    title: React.PropTypes.string,
    input: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    onSideClick: React.PropTypes.func.isRequired,
    onMoresClick: React.PropTypes.func.isRequired
  }
  constructor() {
    super();
    this.onBackClick = (e) => {
      e.stopPropagation();
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = '/';
      }
    };
  }
  render() {
    const {
      menu,
      back,
      search,
      more,
      title,
      input,
      bgColor,
      onSideClick,
      onMoresClick
    } = this.props;
    // 图标的颜色
    let color = null;
    if (bgColor === '#2b2b2b') {
      color = '#fff';
    } else if (bgColor === '#e5e5e5') {
      color = '#2b2b2b';
    }
    return (
      <header style={{ backgroundColor: bgColor }}>
        <div className="header-container">
          <div className="header-left fl">
            {
              menu ?
                <div className="header-menu" onClick={onSideClick}>
                  <Icon iconCode="&#xe65d;" color={color} />
                </div> : null
            }
            {
              back ?
                <div className="searchheader-back" onClick={this.onBackClick}>
                  <Icon iconCode="&#xe697;" color={color} />
                </div> : null
            }
          </div>
          {
            input ? <input type="text" placeholder={input} /> : null
          }
          {
            title ? <div className="header-title">{title}</div> : null
          }
          <div className="header-right fr">
            {
              search ?
                <div className="header-search">
                  <Icon iconCode="&#xe651;" color={color} />
                </div> : null
            }
            {
              more ?
                <div className="header-mores" onClick={onMoresClick}>
                  <Icon iconCode="&#xe62c;" color={color} />
                </div> : null
            }
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
