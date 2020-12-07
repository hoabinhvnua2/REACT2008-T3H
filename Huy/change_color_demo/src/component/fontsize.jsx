import React, { Component } from 'react';

class FontSize extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontSize: ['12px', '14px', '16px', '18px', '20px']
        }
    }
    setStyle = (value) => {
        return({
            fontSize: value
        })
    }

    handleOnChange = (event) => {
        this.props.onChangeFontSize(event.target.value);
    }

    render() {
        const { fontSize } = this.state;
        return(
            <div className='select-container'>
                 <select className="custom-select" 
                 name="selectBox" 
                 onChange={this.handleOnChange}>
                    { fontSize && fontSize.map((value, index) => {
                        return(
                            <option key={index} 
                            value={value}
                            style={this.setStyle(value)}>{value}</option>
                        );
                    })}
                </select>
            </div>
        );
    }
}

export default FontSize;