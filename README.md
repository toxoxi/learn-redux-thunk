# Learn redux-thunk
Learn redux-thunk by making asynchronous counter.

### Note
- Ducks pattern
  - containers
    - Connect redux and components
  - modules
    - Action
    - ActionCreators
    - Reducer

- redux-thunk with High-Order Function

```jsx
// High-Order Function
export const asyncIncrement = sec => dispatch => {
  dispatch(startAsyncIncrement());

  return setTimeout(() =>
    dispatch(finishAsyncIncrement(sec)),
    sec * 1000
  );
}

// Equal to the above codes
export const asyncIncrement = sec => {
  return dispatch => {
    dispatch(startAsyncIncrement());

    return setTimeout(() =>
      dispatch(finishAsyncIncrement(sec)),
      sec * 1000
    );
  }
}
```
