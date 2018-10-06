// action type
const INCREMENT = 'COUNTER_INCREMENT';
const DECREMENT = 'COUNTER_DECREMENT';

const initialState = {
  count: 0,
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

    default:
      return state;
  }
}

// action-creator
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export default reducer;