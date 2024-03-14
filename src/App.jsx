import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (blog) => {
    setBookmarks([...bookmarks, blog])
  }

  const [readedTime, setreadedTime] = useState(0);
  const handleReadTime = (blog) => {
    const newReadedTime = readedTime + parseInt(blog.reading_time.slice(0,2));
    setreadedTime(newReadedTime)
  }
  return (
    <>
      <h1 className='text-green-500 text-center bg-black'>Bismillah</h1>

      <Header></Header>
      <main className='md:flex justify-between max-w-screen-xl mx-auto'>
        <Blogs handleBookmark={handleBookmark} handleReadTime={handleReadTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readedTime={readedTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
