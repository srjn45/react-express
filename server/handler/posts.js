var fs = require('fs');
var Post = require('../model/post');
var Response = require('../model/response');

module.exports = {
    getAllPosts: (req, res, next) => {
        readFile('posts', function (err, data) {
            let response = new Response(true);
            var posts = JSON.parse(data);
            if (posts.length == 0) {
                response.message = 'No posts Available.';
            }
            response.payload = posts;
            res.send(response);
        });
    },
    getPostById: (req, res, next) => {
        var id = req.params.id;
        readFile('posts', function (err, data) {
            let response = new Response(true);
            let posts = JSON.parse(data);
            let matches = Array.from(posts).filter(post => post.id == id);
            if (matches.length > 0) {
                response.payload = matches[0];
            }
            if (response.payload == null) {
                response.status = false;
                response.message = 'Post not found.';
            }
            res.send(response);
        });
    },
    addPost: (req, res, next) => {
        let post = Object.assign(new Post(req.body.title), req.body);
        writeFile('posts', post, function (err) {
            let response = new Response(true);
            if (err) {
                response.status = false;
                response.payload = err;
            } else {
                response.message = 'Post added successfully';
                response.payload = post;
            }
            res.send(response);
        });
    },
    deletePostById: (req, res, next) => {
        var id = req.params.id;
        readFile('posts', function (err, data) {
            let response = new Response(true);
            var posts = JSON.parse(data);
            let index = Array.from(posts).findIndex(post => post.id == id);
            if (index >= 0) {
                posts.splice(index, 1);
                fs.writeFile('posts', JSON.stringify(posts), function (err) {
                    if (err) {
                        response.status = false;
                        response.payload = err;
                    } else {
                        response.message = 'Post Deleted.';
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
function writeFile(fileName, obj, callback) {
    // ensure file exists if not then create
    fs.writeFile(fileName, '[]', { flag: 'wx' }, function (err) {
        // read current json array
        fs.readFile(fileName, function (err, data) {
            var objArr = JSON.parse(data);
            // add the object to array
            objArr.push(obj);
            // write array back to file
            fs.writeFile(fileName, JSON.stringify(objArr), callback);
        });
    });
}