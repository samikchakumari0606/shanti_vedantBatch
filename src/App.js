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


function App() {
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

       <Input/>

    </div>
  );
}

export default App;

//Babel==>JSX==>JS
// Fragement==><div>

//             </div>

//             <>
//             </>
