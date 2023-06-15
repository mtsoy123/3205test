import { Request, Response, NextFunction } from "express";
const data: User[] = require("../db.json");

type User = {
    email: string;
    number?: number;
};

let currentTimeout: NodeJS.Timeout | null = null;

function handleRequest(req: Request, res: Response) {
    if (currentTimeout) {
        clearTimeout(currentTimeout);
    }

    currentTimeout = setTimeout(() => {
        const { email, number } = req.body;
        const tempArr: User[] = [];

        data.forEach((item) => {
            if (
                item.email === email &&
                (number === undefined || item.number === number)
            ) {
                tempArr.push(item);
            }
        });

        res.send(tempArr);
    }, 5000);
}
module.exports.getUser = (req: Request, res: Response, next: NextFunction) => {
    handleRequest(req, res);
};
