import React, { Component } from 'react';

import { randomRank } from '../config/tool';

import '../styles/hello.css';

class Hello extends Component {
  static propTypes = {
    remove: React.PropTypes.bool.isRequired
  }
  constructor(props) {
    super(props);
    this.rank = randomRank(18)[0];
    // 图片显示
    this.state = {
      isShow: false
    };

    this.onLoad = this.onLoad.bind(this);
  }
  onLoad() {
    this.setState({
      isShow: true
    });
  }
  render() {
    const src = `/src/images/h${this.rank}.png`;
    const isShow = this.state.isShow;
    return (
      !this.props.remove ?
        <div className="hello">
          <div className="hello-container">
            <img className={isShow ? 'show' : ''} src={src} onLoad={this.onLoad} alt="icon" />
          </div>
        </div>
      : <div className="empty" />
    );
  }
}

export default Hello;
