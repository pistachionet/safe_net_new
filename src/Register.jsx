import React, {useState} from 'react'


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh
        console.log(email); // print email and pass to console
    }


    return (
        <div class = "auth-form-container">
        <form className = "register-form" onSubmit={handleSubmit}>
            <label htmlFor = "name">Full Name</label>
            <input value = {name} name = "name" id = "name" placeholder='Full Name '/>
            <label htmlFor= "email">Email</label>
            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type= "email" placeholder= "Email" id="email" name="email" />
            <label htmlFor= "password">Password</label>
            <input value = {pass} onChange = {(e) => setPass(e.target.value)} type= "password" placeholder= "Password" id="password" name="password" />

            <button type = "submit"> Log In </button>
        </form>
        <button className = "link-btn" onClick = {() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
        </div>

    )
}