import React, { Component } from 'react';

import Nav from '../nav';
import Banner from './banner';
import Feature from './feature';

import '../../styles/mainbody.css';

class Mainbody extends Component {
  render() {
    return (
      <div className="mainbody">
        <Nav />
        <Banner />
        <Feature />
      </div>
    );
  }
}

export default Mainbody;
