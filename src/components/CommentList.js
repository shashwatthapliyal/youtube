import React from 'react'
import Comment from './Comment'

const CommentList = ({ data }) => {
    return (
        <div className="space-y-4">
            {data.map((comment, idx) => (
                <div
                    key={idx}
                    className="mx-4 pl-4 border-l-2 border-gray-400"
                >
                    <Comment comment={comment} />

                    <div className="mx-10 my-3">
                        {comment.replies && (
                            <CommentList data={comment.replies} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommentList
