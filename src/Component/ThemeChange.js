import React,{useState} from 'react'

const ThemeChange = () => {

  const[myStyle,setMyStyle]=useState({
                    
  })

  const[btnText,setBtnText]=useState("Light Mode")

  function themeChange(){
       
     

  }

  return (
    <div>
      themechange

      <p >This is my text</p>

      <button onClick={themeChange}>{btnText}</button>
    </div>
  )
}

export default ThemeChange
