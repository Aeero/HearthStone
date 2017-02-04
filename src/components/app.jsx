import React, { Component } from 'react';

// import Nav from './nav';
// import Counter from './counter';

class App extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
