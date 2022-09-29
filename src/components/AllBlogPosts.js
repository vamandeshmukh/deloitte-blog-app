
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBlogPostsList } from '../redux/BlogPostSlice';
import { findAllBlogPosts } from '../services/BlogPostService';


const AllBlogPosts = () => {

    const allBlogPostsToDisplay = useSelector(store => store.blogPost.blogPostsList);

    const dispatch = useDispatch();

    useEffect(() => {
        findAllBlogPosts()
            .then((response) => {
                dispatch(setBlogPostsList(response.data));
                console.log(response.data.length);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-2">
                </div>
                <div className="col-8 justify-content-md-center">
                    <div className="mx-3 my-3 px-3 py-3">
                        <p className="blog-title text-primary text-center display-4">All Blog Posts</p>
                        <div>
                            {(allBlogPostsToDisplay.length !== 0) &&
                                <div>
                                    {
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Writer</th>
                                                </tr>
                                            </thead>
                                            {allBlogPostsToDisplay.map((abp =>
                                                <tbody>
                                                    <tr>
                                                        <td data-toggle="tooltip" title={`Click to read ${abp.title}.`}><Link to={`/viewpost/${abp.id}`}>{abp.title}</Link> </td>
                                                        <td>{abp.userName}</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    );

};

export default AllBlogPosts;