module.exports = class Comment {

    constructor(text) {
        this.id = new Date().getTime();
        this.text = text;
    }

}