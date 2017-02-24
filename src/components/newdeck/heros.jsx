import React, { Component } from 'react';

import Icon from '../icon';
import Button from './button';
import Header from '../header';

import './newdeck.css';

const IMGWIDTH = 140;
const SCALE = 5;
const Z = 0.5;

class Heros extends Component {
  static propTypes = {
    curHero: React.PropTypes.number.isRequired,
    setCurHero: React.PropTypes.func.isRequired,
    nextStep: React.PropTypes.func.isRequired,
    preStep: React.PropTypes.func.isRequired
  }
  constructor() {
    super();
    // @heroIndex: 当前选中
    // @imgWidth: 图片宽度
    // @scale: 缩放基数(每个层级之间大小相差)
    // @z: 层叠基数(0-1之间 1不重叠)
    this.changeHerosState = (heroIndex, imgWidth, scale, z) => {
      const heros = '         '.split('');
      // 当前显示的img和中心得偏移量
      let offset = null;
      heros.forEach((e, index) => {
        const zIndex = Math.abs((index - heroIndex) + 1);
        const item = {
          width: 100 - (zIndex * scale),
          height: 100 - (zIndex * scale),
          src: `/src/images/j${index + 1}.jpg`,
          zIndex: 100 - zIndex
        };
        // 前面一个的left值
        let preLeft = null;
        // 前面一个的宽度比
        let preWidth = null;
        // 当前的left值
        let curLeft = null;

        if (heros[index - 1]) {
          preLeft = heros[index - 1].left || 0;
          preWidth = heros[index - 1].width || 0;
          curLeft = preLeft +
          (imgWidth -
            (((100 - preWidth) / 200) * imgWidth) -
            (((100 - (item.width * z)) / 200) * imgWidth)
          );
        } else {
          curLeft = 0;
        }
        if (zIndex === 0) {
          offset = `50% - ${IMGWIDTH / 2}px - ${curLeft}px`;
        }

        item.left = curLeft;
        heros[index] = item;
      });
      heros.map((e) => {
        const element = e;
        element.left = `${offset} + ${e.left}px`;
        return element;
      });
      return heros;
    };

    this.indexChange = this.indexChange.bind(this);
  }

  componentWillMount() {
    this.heros = this.changeHerosState(this.props.curHero, IMGWIDTH, SCALE, Z);
  }

  componentWillReceiveProps(nextProps) {
    this.heros = this.changeHerosState(nextProps.curHero, IMGWIDTH, SCALE, Z);
  }

  onIndexChange(flag, event) {
    event.stopPropagation();
    const heros = this.heros;
    let curHeroIndex = this.props.curHero;
    const length = heros.length;
    if (flag === 'left') {
      curHeroIndex = curHeroIndex - 1 >= 1 ? curHeroIndex - 1 : 1;
    } else {
      curHeroIndex = curHeroIndex + 1 <= length ? curHeroIndex + 1 : length;
    }
    this.indexChange(curHeroIndex);
  }
  indexChange(index) {
    this.props.setCurHero(index);
  }
  // onHerosScroll(event) {
  //   event.stopPropagation();
  //   const { heros, curHeroIndex } = this.state;
  //   const curLeft = event.target.scrollLeft;
  //   const midLeft =
  //   parseInt(window.getComputedStyle(event.target).getPropertyValue('width'), 10) / 2;
  //   let curIndex = null;
  //   for (let i = 0, l = heros.length; i < l; i += 1) {
  //     if ((curLeft + midLeft) < heros[i].left) {
  //       curIndex = i;
  //       break;
  //     }
  //   }
  //
  //   if (curIndex !== curHeroIndex) {
  //     const hero = this.changeHerosState(curIndex, IMGWIDTH, SCALE, Z);
  //     this.setState({
  //       curHeroIndex: curIndex,
  //       heros: hero
  //     });
  //   }
  // }
  render() {
    const { curHero, preStep, nextStep } = this.props;
    const heros = this.heros;
    return (
      <div className="newdeck-heros-wrap">
        <Header back="true" more="true" title="新建套牌" bgColor="#2b2b2b" position="absolute" />
        <div className="newdeck-heros">
          <div className="newdeck-heros-container">
            <button onClick={this.onIndexChange.bind(this, 'left')} style={{ left: 0 }}>
              <Icon iconCode="&#xe697;" width="0.4rem" height="0.6rem" />
            </button>
            <button onClick={this.onIndexChange.bind(this, 'right')} style={{ right: 0 }}>
              <Icon iconCode="&#xe6a7;" width="0.4rem" height="0.6rem" />
            </button>
            <ul onScroll={this.onHerosScroll}>
              {
                heros.map((e, index) => {
                  const style = {
                    left: `calc(${e.left})`,
                    zIndex: e.zIndex
                  };
                  return (
                    <li style={style} key={index} onClick={this.indexChange.bind(this, index + 1)} className={(curHero - 1) === index ? 'active' : null}>
                      <img width={`${e.width}%`} height={`${e.height}%`} src={e.src} role="presentation" />
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <Button setp={1} nextStep={nextStep} preStep={preStep} />
        </div>
      </div>
    );
  }
}

export default Heros;
