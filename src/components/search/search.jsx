import React, { Component } from 'react';
import { connect } from 'react-redux';
// import fetch from 'isomorphic-fetch';

import Header from '../header';
import SearchFilter from './searchfilter';
import CardList from './cardlist';

import { fetchPosts } from '../../action/action';

class Search extends Component {
  static propTypes = {
    // status: React.PropTypes.string,
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    request: React.PropTypes.func
  }
  componentDidMount() {
    this.props.request('/data/page_1.json');
    // fetch('/data/page_1.json').then((response) => {
    //   if (response.status >= 400) {
    //     throw new Error('Bad response from server');
    //   }
    //   return response.json();
    // }).then((data) => {
    //   console.log(data);
    //   this.setState({
    //     cardData: data.data
    //   });
    // }).catch((e) => {
    //   throw e;
    // });
  }
  render() {
    const { data } = this.props;
    // console.log(status, data);
    return (
      <div className="search">
        <Header back="true" search="true" input="请输入卡片名称" bgColor="#e5e5e5" />
        <CardList data={data} />
        <SearchFilter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.fetchData.status,
    data: state.fetchData.data.data || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    request: (url) => {
      dispatch(fetchPosts(url));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
