import React, { Component } from 'react';

import Bottombar from '../mores';
import Heros from './heros';
import Model from './model';

class Newdeck extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      curHero: 5
    };

    this.setCurHero = this.setCurHero.bind(this);
    this.preStep = this.preStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }
  setCurHero(index) {
    this.setState({
      curHero: index
    });
  }
  preStep(event) {
    event.stopPropagation();
    const step = this.state.step;
    this.setState({
      step: step - 1
    });
  }
  nextStep(event) {
    event.stopPropagation();
    const step = this.state.step;
    this.setState({
      step: step + 1
    });
  }
  render() {
    const { step, curHero } = this.state;
    return (
      <div className="newdeck">
        <Heros
          curHero={curHero}
          setCurHero={this.setCurHero}
          preStep={this.preStep}
          nextStep={this.nextStep}
        />
        <Model
          step={step}
          preStep={this.preStep}
          nextStep={this.nextStep}
        />
        <Bottombar />
      </div>
    );
  }
}

export default Newdeck;
