import React,{useEffect,useState} from 'react'

const UseEEfect = () => {
    const[count,setCount]=useState(0)
    const[like,setLike]=useState(100)

    useEffect(()=>{
      console.log("useEFfect")
    },[like])

    function increament(){
         setCount(count+1)
    }

    function decreament(){
        setCount(count-1)
    }

    function mylike(){
        setLike(like+1)
    }

  return (
    <div>
      <h1>this is my useEffect</h1>
      <h1>{count}</h1>
      <h1>{like}</h1>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decreament</button>
      <button onClick={mylike}>like</button>
    </div>
  )
}

export default UseEEfect
