import React from 'react';
import logo from './logo.svg';
import './Counter.css';

export default class Counter extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      waitSec: 0,
      invalidInput: false,
    };
  }
  handleInputSec = (e) => {
    this.setState({
      waitSec: e.target.value,
      invalidInput: false,
    });
  }
  handleAsyncIncrement = () => {
    const sec = Number(this.state.waitSec);
    if (isNaN(sec)) {
      this.setState({
        invalidInput: true,
      })
    } else {
      this.props.asyncIncrement(Number(this.state.waitSec));
    }
  }
  render() {
    const { count, isWaiting, increment, decrement } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h3>非同期カウンター</h3>
            <div>
              Count: {count}
            </div>
            <div className="buttonContainer">
              <button onClick={increment}>Increment!</button>
              <button onClick={decrement}>Decrement!</button>
              <br/>
              <button onClick={this.handleAsyncIncrement} disabled={isWaiting}>Async Increment!</button>
            </div>
            <div className="inputContainer">
              <p>何秒待つ？</p>
              <input
                value={this.state.waitSec}
                onChange={this.handleInputSec}/>
              {this.waitSec}
              <span> 秒</span>
              {this.state.invalidInput && <p>数字を入力してください🙇‍</p>}
            </div>
            {isWaiting && 
              <div>
                <p>待った秒数だけ Incrementしてるよ〜</p>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
            }
          </div>
        </header>
      </div>
    )
  }
}
