import React, { Component } from 'react';

import '../styles/icon.css';

class Icon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    iconCode: React.PropTypes.string.isRequired,
    text: React.PropTypes.string,
    color: React.PropTypes.string
  }
  render() {
    const { width, height, iconCode, text, color } = this.props;
    const style = {
      width: width || '0.5rem',
      height: height || '0.5rem',
      lineHeight: height || '0.5rem',
      display: 'inline-block',
      color: color || null
    };
    return (
      <div style={{ display: 'inline-block' }}>
        <div className="icon" style={style}>
          <i className="iconfont">{iconCode}</i>
        </div>
        {
          text ? <span>{text}</span> : null
        }
      </div>
    );
  }
}

export default Icon;
