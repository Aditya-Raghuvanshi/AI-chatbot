import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-screen sm:w-2/12 shadow-lg h-[50%] sm:h-screen p-2 '>
            <button className='border-2 border-gray-400 rounded-md my-2 p-2 sm:my-5'>+ NewChat</button>
            <div className="flex flex-col justify-between">
            <p className='py-2 sm:py-5'>History</p>
            <p className='py-2 sm:py-5'>Newchat</p>
            <p className='py-2 sm:py-5'>Newchat</p>
            <p className='py-2 sm:py-5'>Newchat</p>
            <p className='py-2 sm:py-5'>Upgrade to plus</p>
            <p className='py-2 sm:py-5'>Upgrade and F&Q</p>
            <p className='py-2 sm:py-5'>Terms and conditions</p>
            <p className='py-2 sm:py-5'>Privacy and Poilicy</p>
            </div>
            
    </div>
  )
}

export default Sidebar
