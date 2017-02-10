import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Icon from './icon';

// import { sider } from '../action/action';
import '../styles/sidebar.css';

class Sidebar extends Component {
  static propTypes = {
    isShow: React.PropTypes.bool.isRequired
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }
  render() {
    const { isShow } = this.props;
    const sidebarClass = isShow ? 'sidebar show' : 'sidebar';
    return (
      <div className={sidebarClass}>
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
                  <Icon text="主页" iconCode="&#xe614;" />
                </Link>
              </li>
              <li>
                <Link to="/info">
                  <Icon text="消息" iconCode="&#xe665;" />
                </Link>
              </li>
              <li>
                <Link to="/card">
                  <Icon text="我的套牌" iconCode="&#xe65b;" />
                </Link>
              </li>
              <li>
                <Link to="/card">
                  <Icon text="我的收藏" iconCode="&#xe6cb;" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-bottom">
            <div className="sidebar-help">
              <Link to="/help">
                <Icon text="帮助" iconCode="&#xe61a;" />
              </Link>
            </div>
            <div className="sidebar-setting">
              <Link to="/setting">
                <Icon text="设置" iconCode="&#xe64b;" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isShow: state.sidebar
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onHideClick: (event) => {
//       if (!document.querySelector('.sidebar').contains(event.target)) {
//         dispatch(sider(false));
//       }
//     }
//   };
// }

export default connect(
  mapStateToProps,
  null
)(Sidebar);
