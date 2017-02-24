import React, { Component } from 'react';

class Button extends Component {
  static propTypes = {
    step: React.PropTypes.number,
    preStep: React.PropTypes.func.isRequired,
    nextStep: React.PropTypes.func.isRequired
  }
  render() {
    const { step, preStep, nextStep } = this.props;
    return (
      <div className="newdeck-btn">
        <button onClick={preStep}>上一步</button>
        {
          step === 3 ? <button>确定</button> : <button onClick={nextStep}>下一步</button>
        }
      </div>
    );
  }
}

export default Button;
