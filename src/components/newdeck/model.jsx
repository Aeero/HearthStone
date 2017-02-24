import React, { Component } from 'react';

import Header from '../header';
import Button from './button';

class Model extends Component {
  static propTypes = {
    step: React.PropTypes.number.isRequired,
    nextStep: React.PropTypes.func.isRequired,
    preStep: React.PropTypes.func.isRequired
  }
  render() {
    const { step, preStep, nextStep } = this.props;
    return (
      <div className={step === 2 ? 'newdeck-model active' : 'newdeck-model'}>
        <Header back="true" more="true" title="新建套牌" bgColor="#2b2b2b" position="absolute" />
        <ul>
          <li />
          <li />
        </ul>
        <Button step={2} nextStep={nextStep} preStep={preStep} />
      </div>
    );
  }
}

export default Model;
