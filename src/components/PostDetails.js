import React from 'react';
import Comments from './Comments/Comments';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../features/posts/postSlice';
import { getDocRefById } from '../firebase/firebase-firestore';
import { deleteDoc, increment, updateDoc } from 'firebase/firestore';

function PostDetails() {
    const { c_id, p_id } = useParams();
    const allPosts = useSelector(selectAllPosts);
    const post = allPosts.filter(p => p.p_id === p_id)[0];
    const navigate = useNavigate();

    const handleDelete = () => {
        const isOkayToDelete = window.confirm('Are you sure you want to delete?\n',
            'All the comments will also be gone.');
        if (isOkayToDelete) {
            console.log('post is : ', post);
            const totalDeletedContributions = post.total_comments + 1;
            const postDocRef = getDocRefById(p_id, `classes/${c_id}/posts`);
            deleteDoc(postDocRef)
                .then(() => {
                    const classDocRef = getDocRefById(c_id, 'classes');
                    updateDoc(classDocRef, {
                        total_deleted_contributions: increment(totalDeletedContributions)
                    })
                        .then(navigate('/'))
                })
                .catch(err => console.log(err.message))
        }
    };

    return (
        <>
            <div>{`post id from params here : ${p_id}`}</div>
            <div>{`post details are : ${post?.details}`}</div>
            <br />
            <strong onClick={handleDelete}>Delete Post!</strong>
            <br />
            <Comments />
        </>
    );
}

export default PostDetails;