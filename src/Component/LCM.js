import React from "react";

class LCM extends React.Component{

    constructor(){
        super()
        this.state={
            count:0
        }
    console.log("constructor")
    }

    handlePlus(){
        this.setState({count:this.state.count+1})
    }

    componentDidMount(){
        console.log("CDM")
    }

    componentDidUpdate(){
        console.log("CDU")
    }

    render(){
        console.log("render method")
        return(
            <div>
                Life Cycle Method
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.handlePlus()}>plus</button>
            </div>
        )
    }
}
export default LCM