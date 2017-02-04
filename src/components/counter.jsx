import React, { Component } from 'react';
import { connect } from 'react-redux';

import { plus, minus } from '../action/action';

class Counter extends Component {
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    onPlusClick: React.PropTypes.func.isRequired,
    onMinusClick: React.PropTypes.func.isRequired
  };

  render() {
    const { value, onPlusClick, onMinusClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onPlusClick}>加1</button>
        <button onClick={onMinusClick}>减1</button>
      </div>
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
    onPlusClick: () => {
      dispatch(plus());
    },
    onMinusClick: () => {
      dispatch(minus());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
