import React, { Component } from "react";

class Result extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);
    }

    setStyle = (value, fontsize) => {
        return {
            color: value,
            fontSize: fontsize
        }
    }
  render() {
    return (
      <div>
        <p style={ this.setStyle(this.props.color, this.props.fontsize) }>Xin chào, các bạn đang học REACT!</p>
      </div>
    );
  }
}

export default Result;
