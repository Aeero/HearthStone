function plus(number = 1) {
  return {
    type: 'PLUS',
    point: number
  };
}

function minus(number = 1) {
  return {
    type: 'MINUS',
    point: number
  };
}

// window事件
function wrapClickEvent(eventpara) {
  return {
    type: 'WRAP_CLICK_EVENT',
    wrapClickPara: eventpara
  };
}

// 是否显示欢迎界面
function hellor(flag) {
  return {
    type: 'SHOW_HELLO',
    hello: flag
  };
}

// 是否显示侧边栏 flag=1显示  flag=0隐藏
function sider(flag) {
  return {
    type: 'SHOW_SIDEBAR',
    sidebar: flag
  };
}

// 是否显示bottombar
function bottom(flag) {
  return {
    type: 'SHOW_BOTTOMBAR',
    bottombar: flag
  };
}

export { plus, minus, wrapClickEvent, hellor, sider, bottom };
