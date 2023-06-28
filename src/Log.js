import React, { useState } from 'react'
import log from './log.css'
import { useDispatch } from 'react-redux';
import { login } from './Redux/slice/login';



function Log() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const dispatch = useDispatch();

    function handle_Submit(event)
    {
        event.preventDefault();
        
        dispatch(login(
            {
                name :  name,
                email:  email,
                pass :  pass,
                login:  true,
            },
        ))
    }
    return (
        <div className='login-form'>
          
          <form onSubmit={(event)=>handle_Submit(event)}>
            <h1>Login here</h1>
            <input type="input" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password"  placeholder='Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <input className='Submit' type="Submit" onClick={(event)=>handle_Submit(event)} />
          </form>
            
        </div>
      )
}

export default Log
