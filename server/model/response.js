module.exports = class Response {

    constructor(status) {
        this.status = status;
        this.message = '';
        this.payload = null;
    }

}