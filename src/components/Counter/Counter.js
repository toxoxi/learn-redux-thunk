import React from 'react';
import { connect } from 'react-redux';
import * as counterModule from '../../modules/Counter';

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterModule.increment()),
  decrement: () => dispatch(counterModule.decrement()),
})

class Counter extends React.PureComponent {
  render() {
    const { increment, decrement, counter } = this.props;
    return (
      <div>
        <h3>カウンター</h3>
        <button onClick={increment}>Increment!</button>
        <button onClick={decrement}>Decrement!</button>
        <div>
          Count: {counter.count}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);