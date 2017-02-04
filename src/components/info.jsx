import React, { Component } from 'react';
import Nav from './nav';
import Counter from './counter';

class Info extends Component {
  render() {
    return (
      <div>
        info.
        <Nav label="消息" />
        <Counter />
      </div>
    );
  }
}

export default Info;
