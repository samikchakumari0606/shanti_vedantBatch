import React from "react";

class MyState extends React.Component{

    constructor(){
        super()
       this.state={
             count:0
       } 
    }

    handlePlus(){
        this.setState({count:this.state.count+1})
    }

    handleMinus(){
        this.setState({count:this.state.count-1})
    }

    render(){
        return(
            <>
            <h3>{this.state.count}</h3>
            <button onClick={()=>this.handlePlus()}>plus</button>
            <button onClick={()=>this.handleMinus()}>minus</button>
            </>
        )
    }
}
export default MyState