import React, { Component } from 'react';

import '../styles/icon.css';

class Icon extends Component {
  static propTypes = {
    // width: React.PropTypes.number,
    // height: React.PropTypes.number,
    iconCode: React.PropTypes.string.isRequired,
    text: React.PropTypes.string
  }
  render() {
    return (
      this.props.text ?
      (
        <div>
          <div className="icon">
            <i className="iconfont">{this.props.iconCode}</i>
          </div>
          <span>{this.props.text}</span>
        </div>
      )
      : (
        <div className="icon">
          <i className="iconfont">{this.props.iconCode}</i>
        </div>
      )
    );
  }
}

export default Icon;
