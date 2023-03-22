import React, { useEffect, useState } from 'react';
import PostList from '../../components/Post/PostList';
import { listPost } from '../../services/PostService';

const Home = () => {

const [posts, setPosts] = useState([]);

useEffect(()=>{
    listPost()
        .then((post)=>{
            setPosts(post)
        })
        .catch((err)=> console.error(err))
}, [])


    return (
        <div>
           <PostList posts={posts} />
        </div>
    );
};

export default Home;