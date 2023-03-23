import React, { useContext, useEffect, useState } from 'react';
import PostList from '../../components/Post/PostList';
import { listPost } from '../../services/PostService';
import ThemeContext from '../../contexts/ThemeContext';

const Home = () => {

const [posts, setPosts] = useState([]);

const { toggleTheme } = useContext(ThemeContext)

useEffect(()=>{
    listPost()
        .then((post)=>{
            setPosts(post)
        })
        .catch((err)=> console.error(err))
}, [])


    return (
        <div>
            <button onClick={toggleTheme}>Change theme</button>
           <PostList posts={posts} />
        </div>
    );
};

export default Home;