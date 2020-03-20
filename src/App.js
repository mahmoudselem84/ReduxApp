



import React, { Component } from 'react'
import './App.css';
class App extends Component {
  state = {
    count:0
  }

  increment = () => {
  this.setState((state)=>({count:state.count+1}))
  }
  decrement = () => {
    this.setState({count:this.state.count-1})
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}> + </button>
        <div>
          {this.state.count}
        </div>
        <button onClick={this.decrement}> - </button>
      </div>
    )
  }
}

export default App;
