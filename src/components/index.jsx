import React, { Component } from 'react';

import Hello from './hello';
import Header from './header';
import Sidebar from './sidebar';
import Mainbody from './mainbody';
import Bottombar from './mores';

export default class Index extends Component {
  static propTypes = {
  }
  render() {
    return (
      <div className="container">
        <Hello />
        <Mainbody />
        <Header />
        <Sidebar />
        <Bottombar />
      </div>
    );
  }
}
