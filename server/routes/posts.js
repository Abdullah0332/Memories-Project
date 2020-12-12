const express = require("express");

const router = express.Router();

const PostsController = require("../controller/posts")

router.get('/', PostsController.getPost);

router.post('/', PostsController.createPost);

router.patch('/:id', PostsController.updatePost);

router.delete('/:id', PostsController.deletePost);

router.patch('/:id/likePost', PostsController.likePost);

module.exports = router;