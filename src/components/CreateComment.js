import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comment from "../models/Comment";
import { createComment } from '../services/CommentService';
import { Link } from "react-router-dom";

const CreateComment = () => {

    const postIdOfComment = useSelector(store => store.blogPost.currentBlogPost.id);
    const userIdOfCommentWriter = useSelector(store => store.appUser.loggedInUserId);
    const userNameOfCommentWriter = useSelector(store => store.appUser.loggedInUserName);

    const [newComment, setNewComment] = useState({});
    const [feedback, setFeedback] = useState(false);
    const [feedback2, setFeedback2] = useState(false);

    useEffect(
        () => {
            setNewComment(new Comment());
        }
        ,
        []
    );

    const handleNewCommentInput = (evt) => {
        console.log(`${evt.target.name} ${evt.target.value}`);
        setNewComment({
            ...newComment,
            [evt.target.name]: evt.target.value
        });
    };

    const createNewComment = (evt) => {
        const tempComment = { body: newComment.body, userId: userIdOfCommentWriter, userName: userNameOfCommentWriter, postId: postIdOfComment };
        console.log(newComment);
        console.log(tempComment);
        if (tempComment.body !== '') {
            createComment(tempComment)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error.message);
                    alert(`Your comment could not be published due to ${error.message}.`);
                    setNewComment({ body: '' });
                });
            setFeedback(true);
            setTimeout(() => {
                setFeedback(false);
                setNewComment({ body: '' });
            }, 3000);
        }
        else {
            setFeedback2(true);
            setTimeout(() => {
                setFeedback2(false);
                setNewComment({ body: '' });
            }, 3000);
        }

        evt.preventDefault();
    }

    return (
        <div className="border rounded my-3 pt-3">
            <p className="lead text-center">Write a Comment</p>

            <div>
                {!userIdOfCommentWriter &&
                    <div className="border rounded px-3 py-3 mx-3 my-3 bg-white">
                        <Link className="" to="/login" data-toggle="modal" data-target="#loginModal">Please login to write a comment.</Link>
                    </div>
                }
            </div>
            <div>
                {userIdOfCommentWriter &&
                    <div className="border rounded px-3 py-3 mx-3 my-3 bg-white">
                        <div >
                            <form className="form-group">
                                <input
                                    type="text"
                                    value={`Writing as ${userNameOfCommentWriter}`}
                                    className="form-control mt-3 mb-3"
                                    disabled />
                                <textarea
                                    type="textarea"
                                    name="body"
                                    value={newComment.body}
                                    className="form-control mt-3 mb-3"
                                    placeholder="Please write your comment."
                                    onChange={handleNewCommentInput}
                                    required
                                />
                                <input
                                    type="button"
                                    value="Publish"
                                    className="btn btn-outline-primary form-control mt-3 mb-3"
                                    onClick={createNewComment}
                                    required
                                />
                            </form>
                        </div>
                        <div>
                            {
                                (feedback && newComment.body !== '') &&
                                <div className="border border-outline-primary mt-3 mb-3">
                                    <p className="text-center">Your comment had been published successfully.</p>
                                </div>
                            }
                            {
                                (feedback2 && newComment.body === '') &&
                                <div className="border border-outline-primary mt-3 mb-3">
                                    <p className="text-center">Please write a comment to publish.</p>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>

        </div>
    );
}

export default CreateComment;



