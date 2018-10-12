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
            let index = -1;
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].id == id) {
                    index = i;
                    break;
                }
            }
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
            let index = -1;
            let jndex = -1;
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].id == id) {
                    index = i;
                    for (let j = 0; j < posts[i].comments.length; j++) {
                        if (posts[i].comments[j].id == cid) {
                            jndex = j;
                            break;
                        }
                    }
                    break;
                }
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