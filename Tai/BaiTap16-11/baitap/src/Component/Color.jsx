import React, { Component } from 'react';
import './color.scss';

class Color extends Component {
    constructor(props) {
        super(props);


        console.log(this.props);
    };

    myStyle = (value) => {
        return {
            backgroundColor: value
        }
    }

    handleClickChangerColor = (value) => {
        console.log('Pick Color', value);
    }

    render() {
        const { color } = this.props;
        return (
            <div className="custom-wap">
                {/* <div className="custom-span"></div>
                <div className="custom-span"></div>
                <div className="custom-span"></div>
                <div className="custom-span"></div> */}

                { color && color.map((value, index) => {
                    return (
                        <div
                            key={index}
                            className="custom-span"
                            style={this.myStyle(value)}
                            onClick={() => { this.handleClickChangerColor(value) }}
                        ></div>
                    )
                })}
            </div>
        )
    }

}
export default Color;