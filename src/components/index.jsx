import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hello from './hello';
import Wrap from './wrap';
import Header from './header';
import Sidebar from './sidebar';
import Mainbody from './mainbody';
import Bottombar from './mores';

class Index extends Component {
  static propTypes = {
    // 是否显示欢迎界面
    hello: React.PropTypes.bool.isRequired,
    // 是否显示侧边栏
    sidebar: React.PropTypes.bool.isRequired,
    // 是否显示底边栏
    bottom: React.PropTypes.number.isRequired,
  }
  render() {
    const { hello, sidebar, bottom } = this.props;
    const showBottom = bottom === 1 || bottom === 2;
    const wrap = sidebar || showBottom;
    return (
      <div className="container">
        { hello ? <Hello /> : <Mainbody />}
        { wrap ? <Wrap /> : ''}
        <Header />
        <Sidebar />
        { showBottom ? <Bottombar /> : ''}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hello: state.hello,
    sidebar: state.sidebar,
    bottom: state.bottom
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//
//   };
// }

export default connect(
  mapStateToProps,
  null
)(Index);
