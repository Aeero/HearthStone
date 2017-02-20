import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Icon from './icon';
import Wrap from './wrap';

import { sider } from '../action/action';
import '../styles/sidebar.css';

class Sidebar extends Component {
  static propTypes = {
    visible: React.PropTypes.bool.isRequired,
    removeView: React.PropTypes.func
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }
  render() {
    const { visible } = this.props;
    if (visible) {
      return (
        <div>
          <Wrap onWrapClick={this.props.removeView} />
          <div className="sidebar show">
            <div className="sidebar-container">
              <div className="sidebar-user">
                <div className="sidebar-userhead">
                  <img alt="头像" />
                  <div className="sidebar-reset">
                    <i className="iconfont">&#xe601;</i>
                  </div>
                </div>
                <div className="sidebar-userinfo">
                  <p className="sidebar-username">L HF</p>
                  <p className="sidebar-userlabel">...</p>
                </div>
              </div>
              <div className="sidebar-func">
                <ul>
                  <li className="active">
                    <Link to="/main">
                      <Icon text="主页" iconCode="&#xe614;" color="#2b2b2b" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/info">
                      <Icon text="消息" iconCode="&#xe665;" color="#2b2b2b" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/card">
                      <Icon text="我的套牌" iconCode="&#xe65b;" color="#2b2b2b" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/card">
                      <Icon text="我的收藏" iconCode="&#xe6cb;" color="#2b2b2b" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar-bottom">
                <div className="sidebar-help">
                  <Link to="/help">
                    <Icon text="帮助" iconCode="&#xe61a;" color="#2b2b2b" />
                  </Link>
                </div>
                <div className="sidebar-setting">
                  <Link to="/setting">
                    <Icon text="设置" iconCode="&#xe64b;" color="#2b2b2b" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    visible: state.visible.sidebar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeView: () => {
      dispatch(sider(false));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
