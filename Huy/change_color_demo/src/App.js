import React, { Component } from 'react';
import "./App.scss";
import Colors from './component/color';
import Result from './component/result';
import FontSize from './component/fontsize';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorText: 'red',
      fontSize: '12px'
    };
  }

  handler = (value) => {
    this.setState({
      colorText: value
    })
  }

  onChangeFontSize = (value) => {
    this.setState({
      fontSize: value
    })
  }

  render() {
    return (
      <div className="container">
      <Colors color={this.state.colorText} handler={this.handler}/>
      <FontSize onChangeFontSize={this.onChangeFontSize}/> 
      <Result color={this.state.colorText} fontsize={this.state.fontSize}/>
    </div>
    );
  }
}
export default App;
