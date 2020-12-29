import React, { Component } from 'react';
import './App.scss';
import Color from './Component/Color';
import Result from './Component/Result';
import Form from './Component/Form';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      Color:['red', 'green', 'yellow', 'pink']
    };
  }

  render(){
    return(
      <div className="container">
      <Color color={this.state.Color}/>
      <Result result={this.state.colorText} />

      <Form />

      </div>
    )
  }

}

export default App;
