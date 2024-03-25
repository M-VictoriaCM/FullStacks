import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const url = "http://localhost:8000/post/"
//llamamos el enopint (nuestra API)
const ShowPosts = () => {
    //estodos
    const [post, setPost] = useState([])
    //el procedimiento  que trae todos los posts
    const getPost = async () => {
        const res = await axios.get(url)
        setPost(res.data);
    }
    //procedimiento para eliminar el post
    const deletePost=async(id)=>{
        await axios.delete(`${url}${id}`);
        getPost()
    };
    useEffect(() => {
        getPost();
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <small>Create Post</small>
                    <Link to="/create" className="btn btn-info mb-2 ml-2">
                    <i class="fa-solid fa-plus"></i>
                    </Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {post.map((post)=>(
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.content}</td>
                                    <td>
                                        <Link to={`edit/${post.id}`} className="btn btn-info">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                        <button onClick={()=>deletePost(post.id)} className="btn btn-danger">
                                        <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ShowPosts