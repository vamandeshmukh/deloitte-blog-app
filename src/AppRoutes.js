import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './components/Home';
import Login from './components/Login';
import Register from "./components/Register";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import AllBlogPosts from "./components/AllBlogPosts";
import { useParams } from "react-router-dom";
import ViewPost from "./components/ViewPost";
const AppRoutes = () => {

    const { id } = useParams();

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div>
                    <Routes>
                        <Route path="/all" element={<AllBlogPosts />} />
                        <Route path="/create-post" element={<CreatePost />} />
                        <Route path="/viewpost/:id" element={<ViewPost />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
            <div>
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default AppRoutes;

