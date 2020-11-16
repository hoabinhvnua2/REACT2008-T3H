import React, { Component } from 'react';
import "./App.scss";
import Colors from './component/color';
import Result from './component/result';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorText: 'red'
    };
  }

  render() {
    return (
      <div className="container">
      {/* props là chúng dùng để truyền data từ cha vào con */}
      <Colors color={this.state.colorText}/>
      <Result color={this.state.colorText}/>
    </div>
    );
  }
}
export default App;
