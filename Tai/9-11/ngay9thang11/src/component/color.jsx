import React, { Component } from 'react';
import "./color.scss";

class Colors extends Component() {
    constructor(props) {
        super();

        console.log(this.props);
    }
    myStyle => {
        
    }
    render(){
        const {color} = this.props;
        return(
            <div className="color-container">

                {color && color.map((value, index) => {
                    return(
                        <div>
                            key={index}
                            className ="custom-span"
                            style={this.myStyle(value)}
                            onClick={ () => this.handleClickChangeColor(value)}
                            
                            </div>
                    )
                        
                })}
            </div>
        )
    }
   

}

export default Colors;