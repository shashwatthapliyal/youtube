import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center gap-6 py-2'>
            <div className='flex items-center gap-2'>
                <img
                    className='h-7'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY32UfTuRe83OES2BQfrpqO_OiaCQXwHKUw&s' />
                <span className='font-bold'>{name}</span>
            </div>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage