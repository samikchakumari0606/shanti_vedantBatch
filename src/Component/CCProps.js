import { Component } from "react";
import React from "react";


class CCProps extends Component{
    render(){
        return(
            <div>
                <h1>This is my Class Component Props</h1>
                <h2>My name is {this.props.myName}</h2>
                <h2>My Email is {this.props.myEmail}</h2>
            </div>
        )
    }

}

export default CCProps

