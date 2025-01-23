import logo from './logo.svg';
import './App.css';
import CC from './Component/CC';
import FC from './Component/FC';
import Button from './Component/Button';
import FCState from './Component/FCState';
// import CC from './Component/CC';
import MyState from './Component/MyState';
import Toogle from './Component/Toogle';
import CCProps from './Component/CCProps';
import FCProps from './Component/FCProps';
import Input from './Component/Input';
import TextConvert from './Component/TextConvert';
import ThemeChange from './Component/ThemeChange';
import LCM from './Component/LCM';
import React from "react";
import CWU from './Component/CWU';
import UseEEfect from './Component/UseEEfect';

class App extends React.Component {

  constructor(){
    super()
    this.state={
      show:true
    }
  }

  render(){
    return (
      <div className="App">
       {/* <h1>Hello this is my Home page</h1> */}
       {/* <CC/>
       <FC/> */}
       {/* <Button/> */}
       {/* <FCState/> */}
       {/* <MyState/> */}
       {/* <Toogle/> */}
       {/* <CCProps myName="vedant" myEmail="vedant@gmail.com"/>
  
       <FCProps myNewName="anuj" myNewEmail="anuj@gmail.com" /> */}
  
         {/* <Input/> */}
         {/* <TextConvert/> */}
         {/* <ThemeChange/> */}
         {/* <LCM/> */}

         
         {/* {
          this.state.show?<CWU/>:<h1>Component is removed</h1>
         }

         <button onClick={()=>this.setState({show:!this.state.show})}>Toogle Component</button> */}

         <UseEEfect/>
  
      </div>
    );
  }
 
}

export default App;

//Babel==>JSX==>JS
// Fragement==><div>

//             </div>

//             <>
//             </>
