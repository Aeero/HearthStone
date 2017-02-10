import React, { Component } from 'react';
import { connect } from 'react-redux';

import { randomRank } from '../config/tool';
import { hellor } from '../action/action';

import '../styles/hello.css';

class Hello extends Component {
  static propTypes = {
    countDown: React.PropTypes.func.isRequired
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
  componentDidMount() {
    this.props.countDown();
  }
  componentDidUpdate() {
    console.log('update');
  }
  componentWillUnmount() {
    console.log(1);
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
      <div className="hello">
        <div className="hello-container">
          <img className={isShow ? 'show' : ''} src={src} onLoad={this.onLoad} alt="icon" />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // 倒计时2s移除hello
    countDown: () => {
      setTimeout(() => {
        dispatch(hellor(false));
      }, 2500);
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Hello);
