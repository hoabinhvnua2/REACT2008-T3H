import React, { Component } from "react";

class Common extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleClickCong = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleClickTru = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <p> {this.state.count} </p>
        <button onClick={this.handleClickCong}>Cộng</button>
        <button onClick={this.handleClickTru}>Trừ</button>
      </div>
    );
  }
}

export default Common;
