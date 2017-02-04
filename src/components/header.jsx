import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/header.css';
import Nav from './nav';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScroll: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    if (window.scrollY > 100) {
      this.setState({
        isScroll: true
      });
    } else {
      this.setState({
        isScroll: false
      });
    }
  }
  render() {
    const isScroll = this.state.isScroll;
    let imgSrc;
    let headerClassName;
    if (isScroll) {
      imgSrc = '/pc/img/new-change/new-logo.png';
      headerClassName = 'scroll';
    } else {
      imgSrc = '/pc/img/new-change/new-logo2.png';
      headerClassName = '';
    }
    return (
      <header className={headerClassName}>
        <div className="header-container">
          <img className="header-logo" alt="logo" src={imgSrc} />
          <Nav label="首页" />
          <div className="header-sign">
            <Link to="/signin">登录</Link>
            <Link to="/signup">注册</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
