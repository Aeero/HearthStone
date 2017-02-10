import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import fetch from 'isomorphic-fetch';

import { bottom } from '../action/action';
import Icon from './icon';

import '../styles/mores.css';

class Mores extends Component {
  static propTypes = {
    isShow: React.PropTypes.number.isRequired,
    showView: React.PropTypes.func.isRequired
  }
  componentDidMount() {
    // 触发动画
    if (this.props.isShow === 1) {
      this.props.showView();
    }

    // 测试
    fetch('/data/test.json').then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      console.log(response.json());
    }).then((stories) => {
      console.log(stories);
    });
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }
  render() {
    const { isShow } = this.props;
    const className = isShow === 2 ? 'mores show' : 'mores';
    return (
      <div className={className}>
        <h3>更多</h3>
        <ul>
          <li>
            <Link to="/">
              <Icon text="分享" iconCode="&#xe60a;" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Icon text="意见反馈" iconCode="&#xe662;" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isShow: state.bottom
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // onHideClick: (event) => {
    //   console.log('w_click');
    //   if (!document.querySelector('.mores').contains(event.target)) {
    //     dispatch(bottom(0));
    //   }
    // },
    showView: () => {
      dispatch(bottom(2));
    },
    removeView: () => {
      dispatch(bottom(0));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mores);
