import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Chats = () => {
  const selectedDep = useSelector(store=>store.user.selectedDep);
  const [msg,setMsg] = useState("");
  const [chatData,setChatData]=useState([
    {
      id:"1",
      data:"chats will be displayed here"
    },
    {
      id:"2",
      data:"chats will be displayed here"
    },
    {
      id:"3",
      data:"chats will be displayed here"
    },
    {
      id:"4",
      data:"chats will be displayed here"
    }
  ]);

  const handleClick=()=>{
    setChatData([...chatData,{id:chatData.length+1,data:msg}]);
  }

  const pushData=(e)=>{
    if(!e.target.value)
        return;
    setMsg(e.target.value);
  }
  return (
    <div className='flex flex-col w-screen'> 
       <div className="1 m-4 p-4 border-2 border-gray-700 w-96 h-[30%] sm:h-[12%]">
        <h1 className='font-bold'>Introduce yourself to AIWorkSquad</h1>
        <p>Im Nithin CEO of an IT startup company in india</p>
       </div>
       <div className="1 md:w-96 h-full md:h-1/2 m-4 p-4 flex flex-col justify-between overflow-y-scroll">
        {
          chatData.map((item) => <p key={item.id}>{item.data}</p>)
        }
       </div>
       <div className="m-4 p-2 border-2 border-gray-700 w-96 flex justify-between">
        <div className='flex w-3/4'>
          <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6nlT65wtmcjBZyoH4P0gL0G2o6JbThgP8c4NM2a4Jg&s" alt="" />
        <input onChange={pushData} className='px-8 text-cyan-500' type="text" placeholder={'Enter your '+selectedDep+' query Here'} name="" id="" />
        </div>
        <div>
          <img onClick={()=>handleClick()} className='h-10 cursor-pointer' src="https://t3.ftcdn.net/jpg/02/93/72/48/360_F_293724835_LqDz77Sl5zGWOU5eEcPYMM99qeBiiaiu.jpg" alt="send-icon" />
        </div>
       </div>
    </div>
  )
}

export default Chats
