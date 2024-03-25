import axios, { Axios } from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:8000/post/"

const CreatePost = () => {
    const [titulo, setTitulo] = useState([""])
    const [contenido, setContenido] = useState([""])

    const navigate = useNavigate()

    //procedimiento para crear el registro
    const create = async (e) => {
        e.preventDefault()
        await axios.post(url, {
            title: titulo,
            content: contenido
        })
        navigate("/")

    }
    return (
        <div>
            <h1>Crear posts</h1>
            <form onSubmit={create}>
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

                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </div>

    )
}
export default CreatePost