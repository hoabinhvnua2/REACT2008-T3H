import React, { Component } from 'react';
import './App.scss';
import Colors from './component/color';
import Result from './component/result';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      colors: ['red','green', 'yellow', 'pink']
    };
  }
  render(){
    return(
      <div className="app">
      <Colors color={this.state.colors} />
      <Result />
    </div>
    )
  }
}



export default App;
