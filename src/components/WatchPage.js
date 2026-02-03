import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import { VIDEO_LINK } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"))
    const dispatch = useDispatch();
    useEffect(() => { dispatch(closeMenu()) }, [])
    return (
        <div className='w-full'>
            <div className='flex w-full'>
                <div>
                    <iframe
                        width="500" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="INTERNET DESTROYED THEIR LIFE | LAKSHAY CHAUDHARY" frameborder="0" allow="accelerometer;
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage