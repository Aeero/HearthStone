import fetch from 'isomorphic-fetch';

export function plus(number = 1) {
  return {
    type: 'PLUS',
    point: number
  };
}

export function minus(number = 1) {
  return {
    type: 'MINUS',
    point: number
  };
}

// 开始获取数据
const fetchStart = (path) => {
  return {
    type: 'FETCH_START',
    path
  };
};

// const fetching = () => {
//   return {
//     type: 'FETCH_START'
//   };
// };

// 获取数据成功
const fetchEnd = (data) => {
  return {
    type: 'FETCH_END',
    data
  };
};

// 页获取数据
export const fetchPosts = (path) => {
  const url = path;
  return (dispatch) => {
    dispatch(fetchStart(url));
    return fetch(url).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((data) => {
      dispatch(fetchEnd(data));
    }).catch((error) => {
      throw error;
    });
  };
};

// window事件
export function wrapClickEvent(e) {
  return {
    type: 'WRAP_CLICK_EVENT',
    eventType: e.eventType,
    eventComponent: e.eventComponent
  };
}

// 是否显示欢迎界面
export function hellor(flag) {
  return {
    type: 'SHOW_HELLO',
    hello: flag
  };
}

// 是否显示侧边栏 flag=1显示  flag=0隐藏
export function sider(flag) {
  return {
    type: 'SHOW_SIDEBAR',
    sidebar: flag
  };
}

// 是否显示bottombar
export function bottom(flag) {
  return {
    type: 'SHOW_BOTTOMBAR',
    bottombar: flag
  };
}
