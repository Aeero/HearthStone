import React, { Component } from 'react';

import Header from './header';
import Bottombar from './mores';
import Deckchoose from './deckchoose';

class Newdeck extends Component {
  render() {
    return (
      <div className="newdeck">
        <Header back="true" more="true" title="新建套牌" bgColor="#2b2b2b" />
        <Deckchoose />
        <Bottombar />
      </div>
    );
  }
}

export default Newdeck;
