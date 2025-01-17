import React from "react";

function FCProps(props){
    return(
        <>
        <h1>This is my FC Props</h1>
        <h2>My Name is {props.myNewName}</h2>
        <h2>My Email is {props.myNewEmail}</h2>

        </>
    )
}
export default FCProps