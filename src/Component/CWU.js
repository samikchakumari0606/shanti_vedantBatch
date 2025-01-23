import React from "react";

class CWU extends React.Component{

    componentWillUnmount(){
        console.log("cwu")
    }

    render(){
        return(
            <div>
                <h1>This is my Component will unmount page</h1>
            </div>
        )
    }
}
export default CWU