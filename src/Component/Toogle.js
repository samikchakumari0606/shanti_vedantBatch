// rafce

import React,{useState} from 'react'

const Toogle = () => {
    const [status,setStatus]=useState(true)

    // function handleHide(){
    //     setStatus(false)
    // }

    // function handleShow(){
    //        setStatus(true)
    // }

    function handleToggle(){
      setStatus(!status)
    }

  return (
    <div>
        {
          status?<h1>Hello This is React</h1>:""
        }
      
      {/* <button onClick={handleHide}>Hide</button>
      <button onClick={handleShow}>Show</button> */}
      <button onClick={handleToggle}>Toggle</button>

    </div>
  )
}

export default Toogle
