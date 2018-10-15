var express = require('express');
var router = express.Router();

var postHandler = require('../handler/posts');
var commentHandler = require('../handler/comments');

/* GET all posts */
router.route('/')
  .get(postHandler.getAllPosts)
  .post(postHandler.addPost);

router.route('/:id')
  .get(postHandler.getPostById)
  .delete(postHandler.deletePostById);

router.route('/:id/comments')
  .post(commentHandler.addComment);

router.route('/:id/comments/:cid')
  .delete(commentHandler.deleteCommentById);

module.exports = router;
