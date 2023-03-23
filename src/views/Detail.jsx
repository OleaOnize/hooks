import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import PostDetail from '../components/PostDetail/PostDetail';
import { getPost } from '../services/PostService';

const Detail = () => {
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

const renderDetails = () => {
    if (loading) {
        return <p>Loading...</p>
    } else {
        return <PostDetail {...post}/>
    }
}

    useEffect(() => {
        getPost(id)
        .then(postFromDB => {
            setPost(postFromDB)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {renderDetails()}
        </div>
    );
};

export default Detail;