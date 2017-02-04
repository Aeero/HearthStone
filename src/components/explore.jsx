import React, { Component } from 'react';
import Nav from './nav';
import Counter from './counter';

class Explore extends Component {
  render() {
    return (
      <div>
        explore.
        <Nav label="发现" />
        <Counter />
      </div>
    );
  }
}

export default Explore;
