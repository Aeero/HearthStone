import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/banner.css';

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picIndex: 0
    };

    this.data = [{
      imgSrc: '/src/images/banner_1.jpg',
      route: '/'
    }, {
      imgSrc: '/src/images/banner_2.jpg',
      route: '/'
    }, {
      imgSrc: '/src/images/banner_3.jpg',
      route: '/'
    }];

    this.timer = null;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      const picLength = this.data.length;
      const currentIndex = this.state.picIndex;
      const nextIndex = (currentIndex + 1) >= picLength ? 0 : (currentIndex + 1);
      this.setState({
        picIndex: nextIndex
      });
    }, 6000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { picIndex } = this.state;
    return (
      <div className="banner">
        <ul className="banner-img">
          {
            this.data.map((e, i) => {
              return (
                <li key={e.imgSrc} className={picIndex === i ? 'active' : ''}>
                  <Link to={e.route}><img role="presentation" src={e.imgSrc} /></Link>
                </li>
              );
            })
          }
        </ul>
        <ul className="banner-point">
          {
            this.data.map((e, i) => {
              return (
                <li key={`banner-point_${i}`} className={picIndex === i ? 'active' : ''}>
                  <a href="/">&nbsp;</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Banner;
