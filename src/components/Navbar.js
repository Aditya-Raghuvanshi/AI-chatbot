import React from 'react'
import MainLogo from "../assets/Image 5297.png"
import { useDispatch, useSelector } from 'react-redux'
import { SUPPORTED_DEP } from '../constants/Departments';
import { addDep } from '../constants/userSlice';

const Navbar = () => {
    const isLogin = useSelector(store=> store.user.isLogin);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        dispatch(addDep(e.target.value));
    }
  return (
    <div className={isLogin===false?'bg-gray-700 p-2':'bg-cyan-500 p-4 sm:flex justify-between'}>
      <img className='bg-black mx-auto sm:mx-2 h-14 rounded-md p-2' src={MainLogo} alt="main_logo" />
      {isLogin && <div className="sm:flex left-[55%] sm:mx-2 my-4 sm:my-0">
        <select onChange={handleChange} className='bg-white text-center ml-20 sm:ml-0 px-2 rounded-lg h-14'>
          <option value={SUPPORTED_DEP[0].identifier}>Department - {SUPPORTED_DEP[0].name}</option>
          <option value={SUPPORTED_DEP[1].identifier}>Department - {SUPPORTED_DEP[1].name}</option>
        </select>
        <img className='h-10 m-2 ml-40 sm:ml-0 cursor-pointer' src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user123" />
        <p className='items-center mt-4 ml-40 sm:ml-0'>user123</p>
      </div> }
    </div>
  )
}

export default Navbar
