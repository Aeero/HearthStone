import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/nav.css';

class Nav extends Component {
  static defaultProps = {
    label: '首页'
  };
  static propTypes = {
    label: React.PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.navInfo = [{
      label: '首页',
      route: '/'
    }, {
      label: '产品中心',
      route: '/products',
      children: [
        { label: '多平台版', route: '/products/muli' },
        { label: '客户端下载', route: 'products/download' },
        { label: '在线版2.0', route: 'products/online' }
      ]
    }, {
      label: '数据分析',
      route: '/data',
      children: [
        { label: '公众号分析', route: 'data/analysis' },
        { label: '公众号排行榜', route: 'data/rank' },
        { label: '排名上升最快', route: 'data/fast' },
        { label: '分钟级监控', route: 'data/monitoring' },
        { label: '公众号诊断', route: 'data/diagnosis' }
      ]
    }, {
      label: '推广盈利',
      route: '/popu',
      point: true
    }, {
      label: '线下加粉',
      route: '/fans'
    }, {
      label: '用户社区',
      route: '/users'
    }];
  }
  render() {
    const label = this.props.label;
    return (
      <ul className="level1">
        {
          this.navInfo.map((e) => {
            const children = e.children || [];
            const point = e.point;
            return (
              <li key={e.label} className={label === e.label ? 'select' : ''}>
                <Link to={e.route}>{e.label}</Link>
                {point ? <span className="point" /> : ''}
                {children.length > 0 ? <span className="arraw" /> : ''}
                {children.length > 0 ?
                  <ul className="level2">
                    {
                      children.map((el) => {
                        return (
                          <li key={el.label}>
                            <Link to={el.route}>{el.label}</Link>
                          </li>
                        );
                      })
                    }
                  </ul>
                : ''}
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default Nav;
