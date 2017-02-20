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
    visible: React.PropTypes.number.isRequired,
    removeView: React.PropTypes.func
  }
  componentDidMount() {

  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }

  render() {
    const { visible } = this.props;
    const className = visible === 1 ? 'mores show' : 'mores';
    if (visible === 1) {
      return (
        <div>
          <Wrap onWrapClick={this.props.removeView} />
          <div className={className}>
            <h3>更多</h3>
            <ul>
              <li>
                <Link to="/">
                  <Icon text="分享" iconCode="&#xe60a;" color="#2b2b2b" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Icon text="意见反馈" iconCode="&#xe662;" color="#2b2b2b" />
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
    visible: state.visible.bottom
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
