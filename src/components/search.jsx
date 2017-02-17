import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import SearchHeader from './searchheader';
import CardList from './cardlist';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      cardData: []
    };
  }
  componentDidMount() {
    fetch('/data/page_1.json').then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        cardData: data.data
      });
    }).catch((e) => {
      throw e;
    });
  }
  render() {
    const { cardData } = this.state;
    return (
      <div className="search">
        <SearchHeader />
        <CardList data={cardData} />
      </div>
    );
  }
}

export default Search;
