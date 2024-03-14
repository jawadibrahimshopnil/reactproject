import PropTypes from "prop-types";

const Blog = ({blog}) => {
    const {post_cover_img, post_title, reading_time, publish_date, author_name, author_img, hashtags} = blog;
    // const {post_cover_img, post_title} = blog;
    return (
        <div>
            <img style={{"filter":"blur(0px)"}} src={post_cover_img} alt={`cover picture of ${post_title}`} />
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
                </div>
            </div>

            <h2 className="text-3xl">{post_title}</h2>
            <p>
                {
                    hashtags.map((hashtags, idx) => <span key={idx}><a href="">#{hashtags}</a></span>)
                }
            </p>
        </div> 
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;