import axios from "axios";
import { useEffect, useState } from "react";
import BlogPost from "../models/BlogPost";


const CreatePost = () => {


    const url = `http://localhost:12345`;

    const [postId, setPostId] = useState('');
    const [todaysPost, setTodaysPost] = useState({}); // EmpData wants to access this data 
    const [postToPublish, setPostToPublish] = useState({});

    useEffect(
        () => {
            setTodaysPost(new BlogPost());
            setPostToPublish(new BlogPost());
        }
        ,
        []
    );

    const handlePostIdInput = (evt) => {
        console.log(postId);
        setPostId(evt.target.value);
    };

    const handlePostToPublishInput = (evt) => {
        setPostToPublish({
            ...postToPublish,
            [evt.target.name]: evt.target.value
        });
    };

    const getBlogPostData = (evt) => {

        // http://localhost:12345/posts/1

        // axios.get().then().catch();
        axios.get(`${url}/posts/${postId}`)
            .then((response) => {
                console.log(response.data);
                setTodaysPost(response.data);
                setPostId(``);
            }).catch((error) => {
                console.log(error.message);
                alert(`Post with postId ${postId} not found!`);
                setPostId(``);
            });
        evt.preventDefault();
    }

    const sendBlogPostData = (evt) => {
        console.log(`send`);

        axios.post(`${url}/posts/`, postToPublish)
            .then((response) => {
                console.log(response.data);
                alert(`Your blog post with postId ${response.data.id} has been created successfully!`);
                setTodaysPost(new BlogPost());
                setPostToPublish(new BlogPost());
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Your blog post could not be published due to ${error.message}.`);
                setTodaysPost(new BlogPost());
                setPostToPublish(new BlogPost());
            });
        evt.preventDefault();
    }




    return (
        <div className="container">
            <p className="display-4 text-primary ">My Blog Post</p>
            <hr />
            <div className="row justify-content-center">
                <div className="col-5 mx-3 my-3 py-3 bg-white shadow">
                    <p className="lead">Search a Blog Post by Id</p>
                    <form class="form-inline">
                        <input
                            type="number"
                            name="postId"
                            value={postId}
                            onChange={handlePostIdInput}
                            className="form-control mr-2"
                            placeholder="Please enter postId"
                        />
                        <input
                            type="submit"
                            value="Search Post"
                            className="btn btn-outline-primary form-control"
                            onClick={getBlogPostData}
                        />
                    </form>
                    <hr />
                    <div>
                        <p>Title: {todaysPost.title}</p>
                        <p>userId: {todaysPost.userId}</p>
                        <p>id: {todaysPost.id}</p>
                        <p>body: {todaysPost.body}</p>
                    </div>
                </div>

                <div className="col-5 mx-3 my-3 py-3 bg-white shadow">
                    <p className="lead">Create a New Blog Post</p>
                    <form>
                        <input
                            type="number"
                            name="userId"
                            value={postToPublish.userId}
                            className="form-control mt-3 mb-3"
                            placeholder="Please enter userId"
                            onChange={handlePostToPublishInput}
                        />
                        <input
                            type="text"
                            name="title"
                            value={postToPublish.title}
                            className="form-control mt-3 mb-3"
                            placeholder="Please enter title"
                            onChange={handlePostToPublishInput}
                        />
                        <input
                            type="textarea"
                            name="body"
                            value={postToPublish.body}
                            className="form-control mt-3 mb-3"
                            placeholder="Please enter body"
                            onChange={handlePostToPublishInput}
                        />
                        <input
                            type="submit"
                            value="Create Post"
                            className="btn btn-outline-primary mt-3 mb-3"
                            onClick={sendBlogPostData}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;







