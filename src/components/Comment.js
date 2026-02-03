import React from 'react'
import { commentsData } from "./CommentsContainer"

const Comment = ({ comment }) => {
    const { name, text, replies } = comment;
    // console.log(comment)

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
            <h1 className="font-semibold text-gray-800 text-sm mb-1">
                {name}
            </h1>
            <h2 className="text-gray-600 text-sm leading-relaxed">
                {text}
            </h2>
        </div>
    )
}

export default Comment
