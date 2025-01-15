// rafce

import React,{useState} from 'react'

const Toogle = () => {
    const [status,setStatus]=useState(false)

    function handleHide(){
        
    }
  return (
    <div>
        {
          status?<h1>Hello This is React</h1>:""
        }
      
      <button onClick={handleHide}>Hide</button>
      <button>Show</button>
    </div>
  )
}

export default Toogle
