import React, { Component } from 'react';

import '../styles/deckchoose.css';

class Deckchoose extends Component {
  constructor() {
    super();
    // @heroIndex: 当前选中
    // @imgWidth: 图片宽度
    // @scale: 缩放基数(每个层级之间大小相差)
    // @z: 层叠基数(0-1之间 1不重叠)
    this.changeHerosState = (heroIndex, imgWidth, scale, z) => {
      const heros = '         '.split('');
      heros.forEach((e, index) => {
        const zIndex = Math.abs((index - heroIndex) + 1);
        const item = {
          width: zIndex === 0 ? 120 : (100 - (zIndex * scale)),
          height: zIndex === 0 ? 120 : 100 - (zIndex * scale),
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
          curLeft = imgWidth;
        }

        item.left = curLeft;
        heros[index] = item;
      });
      return heros;
    };

    const heros = this.changeHerosState(1, 140, 5, 0.5);
    this.state = {
      curHeroIndex: 1,
      heros,
    };

    this.onHerosScroll = this.onHerosScroll.bind(this);
  }
  onHerosScroll(event) {
    event.stopPropagation();
    const { heros, curHeroIndex } = this.state;
    const curLeft = event.target.scrollLeft;
    const midLeft = parseInt(window.getComputedStyle(event.target).getPropertyValue('width'), 10) / 2;
    let curIndex = null;
    for (let i = 0, l = heros.length; i < l; i += 1) {
      if ((curLeft + midLeft) < heros[i].left) {
        curIndex = i;
        break;
      }
    }

    if (curIndex !== curHeroIndex) {
      const hero = this.changeHerosState(curIndex, 140, 5, 0.5);
      this.setState({
        curHeroIndex: curIndex,
        heros: hero
      });
    }
  }
  render() {
    const { heros, curHeroIndex } = this.state;
    return (
      <div className="deckchoose">
        <div className="deckchoose-heros">
          <h3>选择英雄</h3>
          <ul onScroll={this.onHerosScroll}>
            {
              heros.map((e, index) => {
                const style = {
                  left: `${e.left}px`,
                  zIndex: e.zIndex
                };
                return (
                  <li style={style} key={index} className={(curHeroIndex - 1) === index ? 'active' : null}>
                    <img width={`${e.width}%`} height={`${e.height}%`} src={e.src} role="presentation" />
                  </li>
                );
              })
            }
          </ul>
          <button>下一步</button>
        </div>
      </div>
    );
  }
}

export default Deckchoose;
