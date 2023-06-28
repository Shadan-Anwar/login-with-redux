import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import  log_style  from './log_style.css'
import { logout } from './Redux/slice/login';

function LogOut() {

    const user = useSelector(store=>store.userSlice.user)
    const dispatch = useDispatch();
    function handle_Logout(event)
    {
        event.preventDefault();
        dispatch(logout())


    }
  return (
    <div className='Logout'>
      <h1>Welcome <span>{user.name}</span></h1>
      <button className='Submit' onClick={(event)=>handle_Logout(event)}>Logout</button>
    </div>
  )
}

export default LogOut;
