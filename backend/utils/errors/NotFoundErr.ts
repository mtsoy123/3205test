const { NOT_FOUND } = require("../errorStatuses");

class NotFoundErr extends Error {
    statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = NOT_FOUND;
    }
}

module.exports = NotFoundErr;
