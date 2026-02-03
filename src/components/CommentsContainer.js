import React from 'react'
import Comment from './Comment'
import CommentList from './CommentList'
const commentsData = [
    {
        name: "Shashwat",
        text: "Lorem ipsum dolar sit amet, consectetur adip",
        replies: []
    },
    {
        name: "Shashwat",
        text: "Lorem ipsum dolar sit amet, consectetur adip",
        replies: [
            {
                name: "Shashwat",
                text: "Lorem ipsum dolar sit amet, consectetur adip",
                replies: [
                    {
                        name: "Shashwat",
                        text: "Lorem ipsum dolar sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Shashwat",
                                text: "Lorem ipsum dolar sit amet, consectetur adip",
                                replies: []
                            }
                        ]
                    }, {
                        name: "Shashwat",
                        text: "Lorem ipsum dolar sit amet, consectetur adip",
                        replies: []
                    }

                ]
            },
            {
                name: "Shashwat",
                text: "Lorem ipsum dolar sit amet, consectetur adip",
                replies: []
            }
        ]
    },
    {
        name: "Shashwat",
        text: "Lorem ipsum dolar sit amet, consectetur adip",
        replies: [
            {
                name: "Shashwat",
                text: "Lorem ipsum dolar sit amet, consectetur adip",
                replies: []
            },
            {
                name: "Shashwat",
                text: "Lorem ipsum dolar sit amet, consectetur adip",
                replies: []
            }
        ]
    },
    {
        name: "Shashwat",
        text: "Lorem ipsum dolar sit amet, consectetur adip",
        replies: [
            {
                name: "Shashwat",
                text: "Lorem ipsum dolar sit amet, consectetur adip",
                replies: []
            },
            {
                name: "Shashwat",
                text: "Lorem ipsum dolar sit amet, consectetur adip",
                replies: []
            }
        ]
    },
    {
        name: "Shashwat",
        text: "Lorem ipsum dolar sit amet, consectetur adip",
        replies: [
            {
                name: "Shashwat",
                text: "Lorem ipsum dolar sit amet, consectetur adip",
                replies: []
            },
            {
                name: "Shashwat",
                text: "Lorem ipsum dolar sit amet, consectetur adip",
                replies: []
            }
        ]
    },

]
const CommentsContainer = () => {
    // console.log(commentsData)
    return (
        <div>
            <div>
                <h1 className='font-bold text-xl ml-5 my-6'>Comments:</h1>
            </div>
            <CommentList data={commentsData} />
        </div>
    )
}

export default CommentsContainer