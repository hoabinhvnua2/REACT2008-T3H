import React, { Component } from "react";
import { Button } from "antd";

export class CountClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <Button type="primary" onClick={this.handleClick}>
          Cộng
        </Button>
      </div>
    );
  }
}
