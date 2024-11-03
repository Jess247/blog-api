import { useEffect, useState } from "react"
import deletePng from "../imgs/delete.png"

function PostList({refresh}) {

    const [postList, setPostList] = useState([])

    useEffect(() => {
        fetchPosts()
    },[refresh])

    const fetchPosts = async () => {
        try{
            const res = await fetch("http://localhost:5000/api/posts")
            const data = await res.json()
            setPostList(data)
        }
        catch(err) {
            throw err
            console.log(err)
        }
    }

    const deletePost = async (id) => {
        await fetch(`http://localhost:5000/api/posts/${id}`,
        {
            method:"DELETE"
        })
        fetchPosts()
    }

    return(
        <ul className="post-list">
            {postList.map(post => {
                return (
                    <li key={post.id}>
                    <div className="post-header">
                        <h4 className="list-heading">{post.title}</h4>
                        <img 
                        className="img" 
                        src={deletePng}
                        onClick={() => deletePost(post.id)}
                        />
                    </div>
                    <p className="list-text">{post.content}</p>
    
                    </li>
                )})}
        </ul>
    )
}

export default PostList