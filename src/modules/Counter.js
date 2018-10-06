// action type
const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const START_ASYNC_INCREMENT = 'COUNTER/START_ASYNC_INCREMENT';
const FINISH_ASYNC_INCREMENT = 'COUNTER/FINISH_ASYNC_INCREMENT';

const initialState = {
  count: 0,
  isWaiting: false,
}

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    case START_ASYNC_INCREMENT:
      return {
        ...state,
        isWaiting: true,
      }
    
    case FINISH_ASYNC_INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
        isWaiting: false,
      }

    default:
      return state;
  }
}

// action-creator
export const increment = (value = 1) => {
  return {
    type: INCREMENT,
    payload: value,
  }
}

export const decrement = (value = 1) => {
  return {
    type: DECREMENT,
    payload: value,
  }
}

export const startAsyncIncrement = () => {
  return {
    type: START_ASYNC_INCREMENT
  }
}

export const finishAsyncIncrement = sec => {
  return {
    type: FINISH_ASYNC_INCREMENT,
    payload: sec,
  }
}

// 非同期処理を含む ActionCreator
export const asyncIncrement = sec => dispatch => {
  dispatch(startAsyncIncrement());

  return setTimeout(() =>
    dispatch(finishAsyncIncrement(sec)),
    sec * 1000
  );
}

export default reducer;