module.exports = class Post {

    constructor(title) {
        this.id = new Date().getTime();
        this.title = title;
        this.content = '';
        this.comments = [];
    }

}