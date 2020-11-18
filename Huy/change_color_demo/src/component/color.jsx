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
    console.log(this.props.data);
    return (
      <div className="custom-wap">
        {/* <div className="custom-span"></div>
        <div className="custom-span"></div>
        <div className="custom-span"></div>
        <div className="custom-span"></div> */}

        {color &&
          color.map((value, index) => {
            return (
              <div
                key={index}
                className="custom-span"
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
