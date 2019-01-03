import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

import {updateInput} from './ducks/reducer'

class App extends Component {
  // handleChange = (val) => {
  //   this.props.updateInput(val)
  // }
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <input onChange={(e) => this.props.updateInput(e.target.value)} type="text"/>
        <p>{this.props.input}</p>
      </div>
    );
  }
}
function mapStateToProps(reduxState){
  const {input} = reduxState
  return {
    input
  }
}
// let connected = connect(mapStateToProps)
// export default connected(App);

export default connect(mapStateToProps, {updateInput})(App)
