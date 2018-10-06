import { connect } from 'react-redux';
import * as counterModule from '../../modules/counter';
import Counter from '../../components/Counter/Counter';

const mapStateToProps = state => ({
  count: state.counter.count,
  isWaiting: state.counter.isWaiting,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterModule.increment()),
  decrement: () => dispatch(counterModule.decrement()),
  asyncIncrement: sec => dispatch(counterModule.asyncIncrement(sec)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
