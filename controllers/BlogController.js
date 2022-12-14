import BlogModel from "../models/BlogModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllBlogs = async(req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.status(200).json(blogs);
    } catch (error) {
        res.json({message: error.message});
    };
};
//Mostrar un registro 
export const getBlog = async (req,res) => {
    try {
        const blog = await BlogModel.findAll({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(blog[0]);
    } catch (error) {
        res.json({message: error.message});
    };
};
//Crear un registro 
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body);
        res.status(200).json({"message": "Registro creadeo correctamente"});
    } catch (error) {
        res.json({message: error.message});
    };
};
//Actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        BlogModel.update(req.body, {
            where: {id: req.params.id}
        });
        res.status(200).json({
            "message": "¡Registro actualizado correctamente"
        });
    } catch (error) {
        res.json({message: error.message});
    }
};
//Eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        BlogModel.destroy({
            where: { id : req.params.id}
        });
        res.status(200).json({
            "message": "¡Registro eliminado correctamente"
        });
    } catch (error) {
        res.json({message: error.message});
    };
};