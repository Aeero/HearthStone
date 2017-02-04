import React, { Component } from 'react';
import Nav from './nav';
import Counter from './counter';

class Topic extends Component {
  render() {
    return (
      <div>
        topic.
        <Nav label="话题" />
        <Counter />
      </div>
    );
  }
}

export default Topic;
