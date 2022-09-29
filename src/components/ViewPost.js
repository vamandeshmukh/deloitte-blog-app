import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentBlogPost } from '../redux/BlogPostSlice';
import { findBlogPost } from '../services/BlogPostService';
import DisplayComment from "./DisplayComment";
import CreateComment from "./CreateComment";
import { setCommentsForCurrentBlogPost } from '../redux/BlogPostSlice';
import { findCommentsByPostiId } from '../services/CommentService';

const ViewPost = () => {

    const { id } = useParams();
    const postToDisplay = useSelector(store => store.blogPost.currentBlogPost);
    const commentsList = useSelector(store => store.blogPost.commentsForCurrentBlogPost);

    const dispatch = useDispatch();

    useEffect(() => {

        findBlogPost(id)
            .then((response) => {
                dispatch(setCurrentBlogPost(response.data));
                dispatch(setCurrentBlogPost(response.data));
            })
            .catch((error) => { console.log(error.message); });

        findCommentsByPostiId(id)
            .then((response) => {
                dispatch(setCommentsForCurrentBlogPost(response.data))
                console.log(response.data);
            })
            .catch((error) => { console.log(error.message); });

    }, []);

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-2">

                </div>
                <div className="col-8">
                    <div className="mx-3 my-3 px-3 py-3">
                        <div>
                            <p className="blog-title display-4 text-primary text-center">{postToDisplay.title}</p>
                            <div className="pb-3 mb-3">
                                {!postToDisplay.imgUrl &&
                                    <img className="img-fluid" src="https://d3nn873nee648n.cloudfront.net/900x600/5188/20-BM140537.jpg" alt={postToDisplay.title}></img>
                                }

                                {postToDisplay.imgUrl &&
                                    <img className="img-fluid" src={postToDisplay.imgUrl} alt={postToDisplay.title}></img>
                                }
                            </div>
                            <div className="pb-3 mb-3">
                                <p className="lead text-primary">{postToDisplay.title}</p>
                                <p>Posted by {postToDisplay.userName}</p>
                                <hr />
                                <div style={{ whiteSpace: 'pre-wrap' }}>{postToDisplay.body}</div>
                            </div>
                        </div>
                        <div>
                            <CreateComment />
                        </div>
                        <div className="border rounded my-3 pt-3">
                            <p className="lead text-center">Comments</p>
                            {commentsList &&
                                commentsList.map((cmt =>
                                    <div>
                                        <DisplayComment commentElement={cmt} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div >
    );
};

export default ViewPost;







