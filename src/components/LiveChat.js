import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';
import { setupListeners } from '@reduxjs/toolkit/query';


const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Api Polling....");
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: generateRandomMessage(20),
                })
            )
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className='w-full h-[600px] m-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {
                    chatMessages.map((chat, idx) => <ChatMessage
                        key={idx}
                        name={chat.name} message={chat.message} />)
                }
            </div>
            <div className='flex gap-2'>
                <input
                    type='text'
                    className=' border border-black rounded-lg outline-none p-1 w-full'
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button
                    className='border border-black rounded-lg px-4'
                    onClick={() => {
                        dispatch(addMessage({
                            name: "Shashwat Thapliyal",
                            message: liveMessage
                        }))
                        setLiveMessage("");
                    }

                    }>
                    send
                </button>
            </div>

        </div>
    )
}

export default LiveChat