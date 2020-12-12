const  mongoose = require('mongoose');
const Post = require("../Model/posts")

exports.getPost = async (req, res, next) => {
    try{
        const post = await Post.find()

        res.status(200).json(post)
    }catch (error){
        res.status(400).json({ message: error.message })
    }
}

exports.createPost = async (req, res, next) => {

    const { title, message, creator, tags, selectedFile }  = req.body;
    const newPost = new Post({ title, message, creator, tags, selectedFile });
    
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch (error){
        res.status(409).json({ message: error.message })
        console.log(error)
    }
}

exports.updatePost = async (req, res, next) => {

    const id = req.params.id;
    const { title, message, creator, tags, selectedFile }  = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        error = `No post with id: ${id}`
        res.status(404).send({error})
        return;
    }

    const updatePost = await Post.findByIdAndUpdate( id, { title, message, creator, tags, selectedFile, _id: id } , { new: true })

    res.json(updatePost)
}

exports.deletePost = async (req, res, next) => {

    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        error = `No post with id: ${id}`
        res.status(404).send({error})
        return;
    }

    const deletePost = await Post.findByIdAndRemove(id);

    res.json({ message: "Post Deleted Successfully"})
}

exports.likePost = async (req, res, next) => {

    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        error = `No post with id: ${id}`
        res.status(404).send({error})
        return;
    }

    const post = await Post.findById(id);
    const upddatedPost = await Post.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, { new: true })

    res.json(upddatedPost)

}