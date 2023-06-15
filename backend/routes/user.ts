const router = require("express").Router();
const { celebrate } = require("celebrate");
const Joi = require("joi");
const emailRegex = require("../utils/regExp");

const { getUser } = require("../controllers/user.ts");

router.get(
    "/",
    celebrate({
        body: Joi.object().keys({
            email: Joi.string().required().regex(emailRegex),
            number: Joi.number(),
        }),
    }),
    getUser
);

module.exports = router;
