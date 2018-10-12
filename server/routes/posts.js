var express = require('express');
var router = express.Router();

var postHandler = require('../handler/posts');
var commentHandler = require('../handler/comments');

/* GET all posts */
router.route('/')
  .get(postHandler.getAllPosts)
  .put(postHandler.addPost);

router.route('/:id')
  .get(postHandler.getPostById)
  .delete(postHandler.deletePostById);

router.route('/:id/comment')
  .put(commentHandler.addComment);

router.route('/:id/comment/:cid')
  .delete(commentHandler.deleteCommentById);

module.exports = router;
