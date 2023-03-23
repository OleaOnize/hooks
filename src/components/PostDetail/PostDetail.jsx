import React from 'react';

const PostDetail = ( {title, comments } ) => {
    console.log(comments)
    return (
        <div>
            <h1>Post Detail</h1>
            <h3>{title}</h3>
            <h5>Comments</h5>
            <ol>
                {comments.map((comment) => {
                    return (
                        
                        <li key={comment.id}>
                            {comment.body}
                        </li>
                    )
                })}
            </ol>
        </div>
    );
};

export default PostDetail;