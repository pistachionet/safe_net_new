import React, { useState } from 'react'; // useState is a hook
import '../assets/css/LoginRegPage.css';
import { Login } from "../components/Login";
import { Register } from "../components/Register";

function LoginRegPage() {
  const [currentForm, setCurrentForm] = useState('login'); // useState hook

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
    <div className="LoginRegPage">
      {
        /*ternary operator check if login works, if not, then register*/
        currentForm === 'login' ? <Login onFormSwitch= {toggleForm}/> : <Register onFormSwitch= {toggleForm} /> // 
      }
       
    </div>
  );
}

export default LoginRegPage;