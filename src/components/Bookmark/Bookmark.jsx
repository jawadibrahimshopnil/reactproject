import PropTypes from 'prop-types';

function Bookmark({bookmark}) {
    return (
        <div>
            <h3 className='text-2xl bg-slate-300 p-4 m-4 rounded-xl'>{bookmark.post_title}</h3>
        </div>
    );
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark;