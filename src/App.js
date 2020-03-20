



import React, { Component } from 'react'
import './App.css';
import {connect}from 'react-redux'
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
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.increase}> + </button>
        <div>
          {this.props.count}
        </div>
        <button onClick={this.props.decrease}> - </button>
      </div>
    )
  }
}
function mapStateTOprops(state) {
  return {
    count: state.count
  }
}
function mapDispatchToProps(dispatch) {
  return {
    increase: () => { dispatch({ type: 'INCREAS' }) },
   decrease:()=>{dispatch({type:'DECREASE'})}
  }
}
export default connect(mapStateTOprops,mapDispatchToProps)(App);
