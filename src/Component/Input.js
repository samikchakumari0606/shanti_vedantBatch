import React,{useState} from 'react'

const Input = () => {
    const [data,setData]=useState("")//user value
    const [print,setPrint]=useState(false)                                  //value show


    function getData(event){
        console.log(event.target.value)
        setData(event.target.value)
    }

    

  return (
    <div>
      {/* Input component */}

{/* <            h1>{data}</> */}
     
      {
        print? <h2>{data}</h2>:null
      }


      <input type="text" placeholder='enter username' onChange={getData} />
      <button onClick={()=>setPrint(true)}>submit myform</button>
    </div>
  )
}

export default Input



