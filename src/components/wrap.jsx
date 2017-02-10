import React, { Component } from 'react';
import { connect } from 'react-redux';

import { wrapClickEvent } from '../action/action';

class Wrap extends Component {
  static propTypes = {
    onWrapClick: React.PropTypes.func.isRequired
  }
  render() {
    return (
      <div onClick={this.props.onWrapClick} className="shadow-wrap" />
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onWrapClick: () => {
      dispatch(wrapClickEvent('click'));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrap);
