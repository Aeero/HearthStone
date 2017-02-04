import React, { Component } from 'react';

import Hello from './hello';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      // 是否移除hello页面
      removeHello: false
    };

    this.countDown = this.countDown.bind(this);
  }
  componentDidMount() {
    this.countDown();
  }
  // 倒计时2s移除hello
  countDown() {
    setTimeout(() => {
      this.setState({
        removeHello: true
      });
    }, 2500);
  }
  render() {
    return (
      <div className="container">
        <Hello remove={this.state.removeHello} />
      </div>
    );
  }
}

export default Index;
