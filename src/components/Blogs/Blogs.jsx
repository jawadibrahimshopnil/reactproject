import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmark, handleReadTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(blogs => setBlogs(blogs))
    },[])

    return (
        <div className="md:w-2/3">
            blogs : {blogs.length}
            {
                blogs.map(blog => <Blog handleBookmark={handleBookmark} handleReadTime={handleReadTime} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func,
    handleReadTime: PropTypes.func
}

export default Blogs;