import { NextFunction, Request, Response, ErrorRequestHandler } from "express";

const express = require("express");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const { timeoutMiddleware } = require("./middlewares/timeout.ts");
const bodyParser = require("body-parser");
const { errors } = require("celebrate");
const userRouter = require("./routes/user");
const cors = require("./middlewares/cors");
const INTERNAL_SERVER_ERROR = require("./utils/errorStatuses");

const { PORT = 4000 } = process.env;

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const { statusCode = INTERNAL_SERVER_ERROR, message } = err;
    console.log(err);
    res.status(statusCode).send({
        message:
            statusCode === INTERNAL_SERVER_ERROR
                ? "Internal Server Error"
                : message,
    });
};

const app = express();
app.use(cors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(timeoutMiddleware(5000));

app.use("/", userRouter);
app.use(requestLogger);
app.use(errorLogger);

app.use(errors());

app.use(errorHandler);
app.listen(PORT, "localhost");
