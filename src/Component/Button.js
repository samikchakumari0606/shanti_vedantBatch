import React from 'react'

const Button = () => {
    
    // function handleClick(){
    //     console.log("clicked")
    // }

    // function myButton(){
    //     alert("clicked the second cutton")
    // }

    function handleThirdButton(){
        alert("third button")
    }

  return (
    <div>
      button
      {/* <button onClick={handleClick}>click me</button> */}
      {/* <button onClick={myButton()}>mybutton</button> */}
       {/* <button onClick={()=>handleThirdButton()}>click </button> */}
    </div>
  )
}

export default Button
