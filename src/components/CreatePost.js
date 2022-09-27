
import { useEffect, useState } from "react";
import BlogPost from "../models/BlogPost";
import { createBlogPost } from '../services/BlogPostService';

const CreatePost = () => {


    return (
        <div>
            <div class="modal fade" id="exampleModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
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







