import React, {useState} from 'react'


export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh
        console.log("User:", email, " Password:", pass); // print email and pass to console
    }


    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for= "email">Email</label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)} type= "email" placeholder= "Email" id="email" name="email" />
                <label for= "password">Password</label>
                <input value = {pass} onChange = {(e) => setPass(e.target.value)} type= "password" placeholder= "Password" id="password" name="password" />

                <button type = "submit"> Log In </button>
            </form>
            <button>Don't have an account? Register here.</button>
        </>


    )
}