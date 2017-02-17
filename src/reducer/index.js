const defaultState = {
  count: 0,
  wrapClickPara: null,
  // true：显示欢迎界面，false：不显示
  hello: true,
  // true：显示侧边栏，false：不显示
  sidebar: false,
  // 当前界面
  currentPage: 'main',
  // 0为不显示 1为显示但是隐藏 2隐藏到显示 3为显示到隐藏  可触发动画
  bottom: 0
};

export default function counter(state = defaultState, action) {
  const { type } = action;
  let { point } = action;
  switch (type) {
    case 'PLUS':
      point = state.count + point;
      return Object.assign({}, state, { count: point });
      // break;
    case 'MINUS':
      point = state.count - point;
      return Object.assign({}, state, { count: point });

    case 'WRAP_CLICK_EVENT': {
      let { _sidebar, _bottom } = state;
      const wrap = action.wrapClickPara;
      if (wrap === 'click') {
        _sidebar = false;
        _bottom = 0;
      }
      return Object.assign({}, state, { sidebar: _sidebar, bottom: _bottom });
    }

    case 'SHOW_HELLO':
      return Object.assign({}, state, { hello: action.hello });

    case 'SHOW_SIDEBAR':
      return Object.assign({}, state, { sidebar: action.sidebar });

    case 'SHOW_BOTTOMBAR':
      return Object.assign({}, state, { bottom: action.bottombar });
    default:
      return state;
  }
}
