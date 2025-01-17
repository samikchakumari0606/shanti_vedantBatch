import React,{useState} from 'react'

const Input = () => {
    const [data,setData]=useState("")//user value
    //value show


    function getData(event){
        console.log(event.target.value)
        setData(event.target.value)
    }

    function handleClick(){
        console.log()
    }

  return (
    <div>
      {/* Input component */}
      <h2>{data}</h2>
      <input type="text" placeholder='enter username' onChange={getData} />
      <button onClick={handleClick}>submit username</button>
    </div>
  )
}

export default Input
