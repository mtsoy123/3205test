import { Request, Response, NextFunction } from "express";

const allowedCors = ["localhost:3000", "http://localhost:3000"];
const { OK } = require("../utils/errorStatuses");

module.exports = (req: Request, res: Response, next: NextFunction) => {
    const { origin } = req.headers;
    const { method } = req;
    const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS";
    const requestHeaders = req.headers["access-control-request-headers"];

    if (allowedCors.includes(origin!)) {
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Credentials", "true");
    }

    if (method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", DEFAULT_ALLOWED_METHODS);
        res.header("Access-Control-Allow-Headers", requestHeaders);
        return res.status(OK).end();
    }

    next();
};
