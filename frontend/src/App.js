import './App.css';
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import { useState } from "react"


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [refresh, setRefresh] = useState()

  const refreshPosts = () => setRefresh(!refresh)

  return (
    <div className="App">
      <header className="header">
        <h1 className="main-heading">My Blog</h1>
      </header>
      <main className="main">
        <button type="button" className='add-post-btn' onClick={() => setIsOpen(!isOpen) }>Add new Post</button>
        {isOpen &&
          <div className="modal">
            <h2 className="subheading">Create a new post</h2>
            <PostForm refreshPosts={refreshPosts}/>
          </div>}
        <PostList refresh={refresh}/>
      </main>
    </div>
  );
}

export default App;
