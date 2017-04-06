// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  count: 0
};
//reducer is always the default export
export default function counter( state = initialState, action) {
  switch ( action.type ) {
    case INCREMENT:
      return Object.assign({}, state, { count: state.count + action.amount });
      break;
    case DECREMENT:
      return Object.assign({}, state, { count: state.count - action.amount });
      break;
    default:
      return state;
  }
  return state
}

export function increment( amount ) {
  return {
    type: INCREMENT,
    amount
  }
}

export function decrement( amount ) {
  return {
    type: DECREMENT,
    amount
  }
}
