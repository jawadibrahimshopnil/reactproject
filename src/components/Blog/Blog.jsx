import PropTypes from "prop-types";
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({blog, handleBookmark, handleReadTime}) => {
    const {post_cover_img, post_title, reading_time, publish_date, author_name, author_img, hashtags} = blog;
    // const {post_cover_img, post_title} = blog;
    return (
        <div className="mb-20">
            <img className="w-full" style={{"filter":"blur(0px)"}} src={post_cover_img} alt={`cover picture of ${post_title}`} />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author_name}</h3>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}</span>
                    <button onClick={()=>handleBookmark(blog)}><IoBookmarkSharp /></button>
                </div>
            </div>

            <h2 className="text-2xl font-medium">{post_title}</h2>
            <p>
                {
                    hashtags.map((hashtags, idx) => <span className="ml-2" key={idx}><a href="">#{hashtags}</a></span>)
                }
            </p>
            <h4 onClick={()=>handleReadTime(blog)} className="text-2xl text-blue-600 underline px-4">Mark as readed</h4>
        </div> 
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func
}

export default Blog;