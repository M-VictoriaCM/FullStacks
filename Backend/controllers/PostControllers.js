import PostModel from '../models/PostModel.js'

//metodos para el crud

//MOSTRAR TODOS LOS REGISTROS 
export const getAllPost = async(req, res)=>{
    try {
        const post = await PostModel.findAll()
        res.json(post)
    } catch (error) {
        res.json({message:error.message})
    }
}

//mostramos el registro
export const getPost= async(req, res)=>{
    try {
        const post = await PostModel.findByPk(req.params.id)
        res.json(post)
    } catch (error) {
        res.json({message:error.message})
    }
}

//crear un registro
export const createPost = async(req, res)=>{
    try {
        await PostModel.create(req.body);
        res.json({
            "message":"registro creado correctamente"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

//Actualizar un registro
export const updatePost= async(req, res)=>{
    try {
        await PostModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message": "registro creado correctamente"
        })
    } catch (error) {
        res.json({message:error.message});
    }
}
//Borrar un registro
export const deletePost=async(req, res)=>{
    try {
        await PostModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "message": "registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:error.message});
    }
}