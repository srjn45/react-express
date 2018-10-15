var fs = require('fs');
var Comment = require('../model/comment');
var Response = require('../model/response');

module.exports = {
    addComment: (req, res, next) => {
        var id = req.params.id;
        var comment = new Comment(req.body.text);
        readFile('posts', function (err, data) {
            let response = new Response(true);
            var posts = JSON.parse(data);
            let index = Array.from(posts).findIndex(post => post.id == id);
            if (index >= 0) {
                posts[index].comments.push(comment);
                fs.writeFile('posts', JSON.stringify(posts), function (err) {
                    if (err) {
                        response.status = false;
                        response.payload = err;
                    } else {
                        response.message = 'Comment Added.';
                        response.payload = comment;
                    }
                    res.send(response);
                });
            } else {
                response.status = false;
                response.message = 'Post not found.';
                res.send(response);
            }
        });
    },
    deleteCommentById: (req, res, next) => {
        var id = req.params.id;
        var cid = req.params.cid;
        readFile('posts', function (err, data) {
            let response = new Response(true);
            var posts = JSON.parse(data);
            let index = Array.from(posts).findIndex(post => post.id == id);
            let jndex = -1;
            if (index != -1) {
                jndex = Array.from(posts[index].comments).findIndex(comment => comment.id == cid);
            }
            if (index >= 0 && jndex >= 0) {
                posts[index].comments.splice(jndex, 1);
                fs.writeFile('posts', JSON.stringify(posts), function (err) {
                    if (err) {
                        response.status = false;
                        response.payload = err;
                    } else {
                        response.message = 'Comment Deleted.';
                    }
                    res.send(response);
                });
            } else {
                response.status = false;
                response.message = 'Post not found.';
                res.send(response);
            }
        });
    }
}

function readFile(fileName, callback) {
    fs.writeFile(fileName, '[]', { flag: 'wx' }, function (err) {
        fs.readFile(fileName, callback);
    });
}