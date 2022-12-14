import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogPost from "../models/BlogPost";
import { createBlogPost } from '../services/BlogPostService';
import { useSelector } from "react-redux";

const CreatePost = () => {

    const navigate = useNavigate();
    const [newBlogPost, setNewBlogPost] = useState({});
    const bloggerId = useSelector(store => store.appUser.loggedInUserId);
    const bloggerName = useSelector(store => store.appUser.loggedInUserName);
    const parseLines = (value) => value.replace(/(\n)/g, "\n");

    useEffect(
        () => {
            setNewBlogPost(new BlogPost());
        }
        ,
        []
    );

    const handleNewBlogPostInput = (evt) => {
        console.log(`${evt.target.name} ${evt.target.value}`);
        setNewBlogPost({
            ...newBlogPost,
            [evt.target.name]: evt.target.value
        });
    };

    const createNewBlogPost = (evt) => {
        const tempBlogPost = { title: newBlogPost.title, body: newBlogPost.body.replace(/\n/g, "<br />"), userId: bloggerId, userName: bloggerName, imgUrl: newBlogPost.imgUrl };
        console.log(tempBlogPost);
        console.log(newBlogPost);
        createBlogPost(tempBlogPost)
            .then((response) => {
                console.log(response.data);
                navigate(-1);
                setNewBlogPost({ id: '' });
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Your blog post could not be published due to ${error.message}.`);
                setNewBlogPost({ id: '' });
            });
        evt.preventDefault();
    }

    const cancelCreate = () => {
        navigate(-1);
    };


    return (
        <div>
            
            <div className="modal fade" id="createNewBlogPost" data-backdrop="static" data-keyboard="false" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <p className="lead text-primary" id="exampleModalLabel">Create a New Blog Post</p>
                            <button type="button" className="close" onClick={cancelCreate} data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form-group">
                                <input
                                    type="text"
                                    value={`Writing as ${bloggerName}`}
                                    className="form-control mt-3 mb-3"
                                    disabled
                                />
                                <input
                                    type="text"
                                    name="title"
                                    value={newBlogPost.title}
                                    className="form-control mt-3 mb-3"
                                    placeholder="Please enter title"
                                    onChange={handleNewBlogPostInput}
                                    required
                                />
                                <textarea
                                    type="textarea"
                                    name="body"
                                    value={newBlogPost.body}
                                    className="form-control mt-3 mb-3"
                                    placeholder="Please enter body"
                                    onChange={handleNewBlogPostInput}
                                    required
                                />
                                <input
                                    type="text"
                                    name="keywords"
                                    value={newBlogPost.keywords}
                                    className="form-control mt-3 mb-3"
                                    placeholder="Please enter keywords"
                                    onChange={handleNewBlogPostInput}
                                    required
                                />
                                <input
                                    type="url"
                                    name="imgUrl"
                                    value={newBlogPost.imgUrl}
                                    className="form-control mt-3 mb-3"
                                    placeholder="Please paste image url"
                                    onChange={handleNewBlogPostInput}
                                    required
                                />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" onClick={cancelCreate} data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-outline-primary" onClick={createNewBlogPost} data-dismiss="modal">Create Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;









// import { useEffect, useState } from "react";
// import BlogPost from "../models/BlogPost";
// import { createBlogPost } from '../services/BlogPostService';

// const CreatePost = () => {

//     const [newBlogPost, setNewBlogPost] = useState({});

//     useEffect(
//         () => {
//             setNewBlogPost(new BlogPost());
//         }
//         ,
//         []
//     );

//     const handleNewBlogPostInput = (evt) => {
//         console.log(`${evt.target.name} ${evt.target.value}`);
//         setNewBlogPost({
//             ...newBlogPost,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     const createNewBlogPost = (evt) => {
//         console.log(newBlogPost);
//         createBlogPost(newBlogPost)
//             .then((response) => {
//                 console.log(response.data);
//                 alert(`Your blog post with title ${response.data.title} has been created successfully!`);
//                 setNewBlogPost({ id: '' });
//             })
//             .catch((error) => {
//                 console.log(error.message);
//                 alert(`Your blog post could not be published due to ${error.message}.`);
//                 setNewBlogPost({ id: '' });
//             });
//         evt.preventDefault();
//     }

//     return (
//         <div className="container" >
//             <p className="display-4 text-primary py-3">Write</p>
//             <hr />
//             <div className=" col-3 mt-3 py-3 px-3 shadow bg-white" >
//                 <p className="lead text-primary pb-2">Write a New Blog Post</p>
//                 <form className="form-group">
//                     <input
//                         type="number"
//                         name="userId"
//                         value={newBlogPost.userId}
//                         className="form-control mt-3 mb-3"
//                         placeholder="Please enter userId"
//                         onChange={handleNewBlogPostInput}
//                     />
//                     <input
//                         type="text"
//                         name="title"
//                         value={newBlogPost.title}
//                         className="form-control mt-3 mb-3"
//                         placeholder="Please enter title"
//                         onChange={handleNewBlogPostInput}
//                     />
//                     <textarea
//                         type="textarea"
//                         name="body"
//                         value={newBlogPost.body}
//                         className="form-control mt-3 mb-3"
//                         placeholder="Please enter body"
//                         onChange={handleNewBlogPostInput}
//                     />
//                     <input
//                         type="text"
//                         name="keywords"
//                         value={newBlogPost.keywords}
//                         className="form-control mt-3 mb-3"
//                         placeholder="Please enter keywords"
//                         onChange={handleNewBlogPostInput}
//                     />

//                     <input
//                         type="button"
//                         value="Create Post"
//                         className="btn btn-outline-primary mt-3 mb-3"
//                         onClick={createNewBlogPost}
//                     />
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CreatePost;







