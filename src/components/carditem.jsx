import React, { Component } from 'react';

import '../styles/carditem.css';

class CardItem extends Component {
  static propTypes = {
    'card-data': React.PropTypes.objectOf(React.PropTypes.any)
  }
  render() {
    const card = this.props['card-data'];
    // 卡片的id用于获取图片
    const cardId = card.card_id;
    // 卡片的技能
    const cardText = card.text;
    // 卡片的稀有程度
    const cardRarity = card.rarity;
    // 卡片类型
    const cardType = card.type;
    // const img = `/8hpoty/YWxqaGBf/images/resource/new_middler/${cardId}.png`;
    const img = `/v1/media/byName/hs/cards/enus/pal/${cardId}.png`;
    return (
      <li className={`carditem ${cardRarity}`}>
        <div className="carditem-info">
          <div className={cardType === 'SPELL' ? 'carditem-img spell' : 'carditem-img minion'}>
            <img src={img} role="presentation" />
          </div>
          <div className="carditem-intro">
            <p className="carditem-name"><span>{card.name}</span></p>
            <p className="carditem-spell">类型：<span>{cardType}</span></p>
            <p className="carditem-type">职业：<span>{card.card_class}</span></p>
            <p className="carditem-set">来源：<span>{card.set}</span></p>
          </div>
        </div>
        <div className="carditem-text" dangerouslySetInnerHTML={{ __html: cardText }} />
      </li>
    );
  }
}

export default CardItem;
