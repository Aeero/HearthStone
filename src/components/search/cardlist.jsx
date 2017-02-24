import React, { Component } from 'react';

import CardItem from './carditem';

const listStyle = {
  marginTop: '0.55rem',
  marginBottom: '82px'
};

class CardList extends Component {
  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object)
  };
  render() {
    const { data } = this.props;
    return (
      <div style={listStyle}>
        <ul>
          {
            data.map((e, i) => {
              return <CardItem key={i} card-data={e} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default CardList;
