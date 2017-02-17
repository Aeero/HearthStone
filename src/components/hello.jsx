import React, { Component } from 'react';

import { randomRank } from '../config/tool';

import '../styles/hello.css';

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.rank = randomRank(18)[0];
    // 图片显示
    this.state = {
      visible: true,
      isShow: false
    };

    this.onLoad = this.onLoad.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 2500);
  }
  componentDidUpdate() {
    // console.log('update');
  }
  componentWillUnmount() {
    // console.log(1);
  }
  onLoad() {
    this.setState({
      isShow: true
    });
  }
  render() {
    const src = `/src/images/h${this.rank}.png`;
    const { visible, isShow } = this.state;
    if (visible) {
      return (
        <div className="hello">
          <div className="hello-container">
            <img className={isShow ? 'show' : ''} src={src} onLoad={this.onLoad} alt="icon" />
          </div>
        </div>
      );
    }
    return null;
  }
}
