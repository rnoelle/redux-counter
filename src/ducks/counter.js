// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO";

const initialState = {
  count: 0,
  futureValues: [],
  previousValues: []
};
//reducer is always the default export
export default function counter( state = initialState, action) {
  switch ( action.type ) {
    case INCREMENT:
      return {
        count: state.count + action.amount
        , futureValues: []
        , previousValues: [...state.previousValues, state.count]
      };
      break;
    case DECREMENT:
      return {
        count: state.count - action.amount
        , futureValues: []
        , previousValues: [...state.previousValues, state.count]
      };
      break;
    case UNDO:
      return {
        count: state.previousValues[state.previousValues.length - 1]
        , futureValues: [...state.futureValues, state.count]
        , previousValues: state.previousValues.slice(0, state.previousValues.length - 1)
      }
      break;
    case REDO:
      return {
        count: state.futureValues[state.futureValues.length - 1]
        , futureValues: state.futureValues.slice(0, state.futureValues.length - 1)
        , previousValues: [...state.previousValues, state.count]
      }
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

export function undo() {
  return {
    type: UNDO
  }
}

export function redo() {
  return {
    type: REDO
  }
}
