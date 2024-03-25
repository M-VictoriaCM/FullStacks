import axios, { Axios } from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const url = "http://localhost:8000/post/"
const EditPost =()=>{
    const [titulo, setTitulo] = useState("")
    const [contenido, setContenido] = useState("")

    const navigate = useNavigate()
    const {id} =useParams()
    //utilizo useEffect para traer el post que ingresa 
    useEffect(()=>{
        getPostById()
    },[])

    //procedimiento para traer un post por su id
    const getPostById = async()=>{
        const res= await axios.get(url + id)
        setTitulo(res.data.title)
        setContenido(res.data.content)
    }
    //procedimiento para actualizar un contenido
    const update = async (e) => {
        e.preventDefault()
        await axios.put(url+id, {
            title: titulo,
            content: contenido
        })
        navigate("/")
    }

    return(
        <div>
            <h1>Editar posts</h1>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Titulos</label>
                    <input 
                    value={titulo}
                    onChange={(e)=>setTitulo(e.target.value)}
                    type="text" 
                    className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <input 
                    value={contenido}
                    onChange={(e)=>setContenido(e.target.value)}
                    type="text" 
                    className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Edita</button>
            </form>
        </div>
    )
}
export default EditPost