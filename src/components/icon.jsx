import React, { Component } from 'react';

import '../styles/icon.css';

class Icon extends Component {
  static propTypes = {
    iconCode: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        <div className="icon">
          <i className="iconfont">{this.props.iconCode}</i>
        </div>
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default Icon;
