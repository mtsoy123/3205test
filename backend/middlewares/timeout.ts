import { NextFunction, Request, Response } from "express";

const timeoutMiddleware = (timeout: number) => {
    let currentTimeout: NodeJS.Timeout | null = null;

    return (req: Request, res: Response, next: NextFunction) => {
        if (currentTimeout) {
            clearTimeout(currentTimeout);
        }

        currentTimeout = setTimeout(() => {
            next();
        }, timeout);
    };
};

module.exports = {
    timeoutMiddleware,
};
