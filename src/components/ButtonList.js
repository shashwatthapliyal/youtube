import React from 'react'
import ButtonItems from './ButtonItems'


const list = ["All", "Live", "Gaming", "Music","Sports","Programming","Trending"]
const ButtonList = () => {
    return (
        <div className='flex gap-4'>
            {
                list.map((name, idx) => <ButtonItems key={idx} name={name} />)
            }
        </div>
    )
}

export default ButtonList