import React, { useState } from 'react'; // useState is a hook
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login'); // useState hook

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
    <div className="App">
      {
        /*ternary operator check if login works, if not, then register*/
        currentForm === 'login' ? <Login onFormSwitch= {toggleForm}/> : <Register onFormSwitch= {toggleForm} /> // 
      }
       
    </div>
  );
}

export default App;
