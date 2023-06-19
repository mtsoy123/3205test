import { Request, Response, NextFunction } from "express";
const NotFoundErr = require("../utils/errors/NotFoundErr");
const data: User[] = require("../db.json");

type User = {
    email: string;
    number?: number;
};

function handleRequest(req: Request, res: Response, next: NextFunction) {
    const { email, number } = req.body;
    const tempArr: User[] = [];

    data.forEach((item) => {
        if (
            item.email === email &&
            (number === (undefined || null || "") || item.number === number)
        ) {
            tempArr.push(item);
        }
    });

    if (tempArr.length === 0) {
        next(new NotFoundErr("Not found"));
    } else {
        res.send(tempArr);
    }
}

module.exports.getUser = (req: Request, res: Response, next: NextFunction) => {
    handleRequest(req, res, next);
};
