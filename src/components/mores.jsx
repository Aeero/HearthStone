import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Wrap from './wrap';
// import fetch from 'isomorphic-fetch';

import { bottom } from '../action/action';
import Icon from './icon';

import '../styles/mores.css';

class Mores extends Component {
  static propTypes = {
    isShow: React.PropTypes.number.isRequired
  }
  componentDidMount() {

  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }
  render() {
    const { isShow } = this.props;
    const className = isShow === 1 ? 'mores show' : 'mores';
    if (isShow === 1) {
      return (
        <div>
          <Wrap />
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
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    isShow: state.bottom
  };
}

function mapDispatchToProps(dispatch) {
  return {

    removeView: () => {
      dispatch(bottom(0));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mores);
