import React,{useState} from 'react'

const TextConvert = () => {

    const [text,setText]=useState("")

    function getData(event){
      console.log(event.target.value)
      setText(event.target.value)
    }


    function handleUpper(){

        let myText=text.toUpperCase()
        console.log(myText)
        setText(myText)
       
    }

    function handleLower(){
        let myNewText=text.toLowerCase();
        console.log(myNewText)
        setText(myNewText)
    }

  return (
    <div>
      {/* textconvert */}

      <h1>{text}</h1>

      <textarea type="text" placeholder='add your text to convert' onChange={getData}/>
      <br/>
      <button onClick={handleUpper}>uppercase</button>
      <button onClick={handleLower}>lowercase</button>
    </div>
  )
}

export default TextConvert
