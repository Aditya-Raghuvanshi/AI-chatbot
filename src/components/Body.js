import React from 'react'
import Sidebar from './Sidebar'
import Chats from './Chats'

const Body = () => {
  return (
    <div className='sm:flex'>
      <Sidebar/>
      <Chats/>
    </div>
  )
}

export default Body
