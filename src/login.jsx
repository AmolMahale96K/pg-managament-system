import React from 'react'
import { useState } from 'react'

const Login =()=> {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const handlesubmit = (e)=>{
  if(username==="Yashodhan22" && password==="Tcs#1234")
  {
    alert("Login Scuccessful !!")
  }
  else{
    alert("Zatya")
  }
}


  return (
    <>  
        <div className='card'>
            <h3>Login page</h3>
            <label htmlFor="username">Username :</label>
            <input type="text"
                   id='username'
                   value={username}
                   onChange={(e)=>setUsername(e.target.value)}
                   required
                   placeholder='Username' />
            
            <label htmlFor="password">Password :</label>
            <input type="password"
                   id='password'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   required
                   placeholder='Password' />

            <button className='submit'
                    onClick={handlesubmit}>Login</button>
        </div>

    </>
  )
};

export default Login;