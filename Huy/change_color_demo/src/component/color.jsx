import React, { Component } from "react";
import "./color.scss";

class Colors extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      color: ["red", "green", "yellow", "pink"],
    };
  }

  myStyle = (value) => {
    return {
      backgroundColor: value,
    };
  };

  render() {
    const { color } = this.state;
    return (
      <div className="custom-wap">
        {color &&
          color.map((value, index) => {
            return (
              <div
                key={index}
                className={this.props.color === value ? "custom-span active" : "custom-span"}
                style={this.myStyle(value)}
                onClick={() => {this.props.handler(value)}}
              ></div>
            );
          })}
      </div>
    );
  }
}

export default Colors;
