const defaultState = {
  count: 0
};

function counter(state = defaultState, action) {
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
    default:
      return state;
  }
}

export default { counter };
