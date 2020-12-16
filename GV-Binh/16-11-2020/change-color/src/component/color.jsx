import React, { Component } from "react";
import "./color.scss";

class Colors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ["red", "green", "yellow", "pink"],
    };
  }

  myStyle = (value) => {
    return {
      backgroundColor: value,
    };
  };

  handleClickChangeColor = (value) => {
    this.props.receive(value);
  };

  render() {
    const { color } = this.state;
    return (
      <div className="custom-wap">
        {/* <div className="custom-span"></div>
        <div className="custom-span"></div>
        <div className="custom-span"></div>
        <div className="custom-span"></div> */}

        {color &&
          color.map((value, index) => (
          <div
            key={index}
            className={this.props.color === value ? "custom-span active" : "custom-span"}
            style={this.myStyle(value)}
            onClick={() => {
              this.handleClickChangeColor(value);
            }}
          ></div>
          ))}
      </div>
    );
  }
}

export default Colors;
