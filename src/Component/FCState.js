import React,{useState} from 'react'

const FCState = () => {

    // const [initial value,updater function]=useState(initial value)

    const [count,setCount]=useState(0)

    function handlePlus(){
        setCount(count+1)
    }
    function handleMinus(){
         setCount(count-1)
    } 

     
  return (
    <div>
      <h1>this is state of FC</h1>
      <h2>{count}</h2>
      <button disabled={count==5} onClick={handlePlus}>plus</button>
      <button disabled={count==0} onClick={handleMinus}>minus</button>

    </div>
  )
}

export default FCState
