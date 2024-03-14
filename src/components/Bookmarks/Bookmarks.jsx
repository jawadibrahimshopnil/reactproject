import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readedTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-100 text-center ml-6">
            <div className='p-4 bg-blue-300 text-2xl'>
                Spended time {readedTime} minutes
            </div>
            <h2>bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readedTime: PropTypes.number
}
export default Bookmarks;