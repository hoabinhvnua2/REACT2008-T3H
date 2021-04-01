import React, { Component } from 'react';


class Result extends Component{
    constructor(props){
        super(props);
        this.state = {
            test: 0,
        }
    };

    render(){
        return(
            <div className="text">
                <h1>Hello Tài</h1>
            </div>
        )
    }
}
export default Result;