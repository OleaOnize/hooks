import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';

const PostList = ({posts}) => {
    return (
        <div className='PostList'>
            <h1>All Posts</h1>
            {posts.map((post)=>{
                return (
                   
                    <Link to={`/posts/${post.id}`}>
                    <div key={post.id}>
                <PostItem title={post.title} body={post.body} />
                </div>
                </Link>
                )
            })}
        </div>
    );
};

export default PostList;