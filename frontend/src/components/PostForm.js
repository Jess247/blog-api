import { useState } from "react"

function PostForm({refreshPosts}) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ title, content }), 
          })
        setTitle("")
        setContent("")
        refreshPosts()
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input id="title" onChange={(e) => setTitle(e.target.value)} type="text"/>
            <label htmlFor="post">Post:</label>
            <textarea className="textarea" id="post" onChange={(e) => setContent(e.target.value)}></textarea>
            <button type="submit" className="submit-btn">Post</button>
        </form>
    )
}

export default PostForm