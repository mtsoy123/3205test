const express = require("express");
const router = require("express").Router();
const { requestLogger, errorLogger } = require("./middlewares/logger");
const bodyParser = require("body-parser");
const { errors, celebrate } = require("celebrate");
const Joi = require("joi");
const userRouter = require("./routes/user");

const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
    console.log("here");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", userRouter);
// app.use(requestLogger);
// app.use(errorLogger);
app.use(errorLogger);

app.use(errors());
// app.use((err, req, res, next) => {
//     const { statusCode = 500, message } = err;
//     res.status(statusCode).send({
//         message: statusCode === 500 ? "На сервере произошла ошибка" : message,
//     });
// });
