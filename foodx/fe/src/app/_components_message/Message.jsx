import React from 'react'

function Message({msg}) {
  return (
    <div className='flex flex-col gap-2'>
        {
          msg.map((item,index)=>(
            <span className='bg-gray-200 p-2 w-[20%] rounded-2xl m-2'>{item.content}</span>
          ))
        }
    </div>
  )
}

export default Message