import React, { useRef, useState } from 'react'
import Body from './Body';
import { useDispatch } from 'react-redux';
import { toggleLogin } from '../constants/userSlice';

const Login = () => {
    const [isLogin,setIsLogin]=useState(false);
    const dispatch = useDispatch();
    const password=useRef();
    const email=useRef();
    const handleButtonClick=()=>{
        if(email.current.value==="user123" && password.current.value==="pass123"){
            setIsLogin(!isLogin);
            dispatch(toggleLogin());
        }else{
            alert("Invlaid Password or username");
        }
    }
  return isLogin ? <Body/> :(
    
    <div className='h-screen bg-gray-700'>
       <form onSubmit={(e)=> e.preventDefault()} className='absolute bg-black w-3/4 md:1/2 lg:w-3/12 mx-auto my-12 p-12 right-0 left-0 bg-opacity-85'>
            <h1 className='text-white text-3xl py-2 my-2 font-bold text-center'>Welcome Back</h1>
            <p className='text-white text-center mb-8'>Sign in to continue to Aiworksquad</p>
            <input ref={email} type="email" placeholder='Username' className='p-2 my-4 w-full bg-gray-600 text-white'/><br/>
            <input ref={password} type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-600 text-white'/><br/>
            <div className="flex mb-4 justify-between">
                <div className="flex">
                <input type="checkbox" /> <p className='text-white text-sm'>Rember me</p>
                </div>
                <div className="text-gray-300">Forgot password?</div>
            </div>
            
            <button className='bg-rose-600 p-3 my-4 w-full hover:bg-red-800 rounded-md' onClick={()=>handleButtonClick()}>LOGIN</button>
        </form>
    </div>
  )
}

export default Login
