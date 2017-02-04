import React, { Component } from 'react';
import { Link } from 'react-router';

class Signin extends Component {
  render() {
    return (
      <div className="signin">
        <div className="top">
          <img src="//www.wxb.com/common/img/logo.png" alt="logo" />
          <Link to="/signup">免费注册</Link>
        </div>
      </div>
    );
  }
}

export default Signin;
