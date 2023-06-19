const router = require("express").Router();
const { celebrate } = require("celebrate");
const Joi = require("joi");
const emailRegex = require("../utils/regExp");
const { getUser } = require("../controllers/user.ts");

router.post(
    "/",
    celebrate({
        body: Joi.object().keys({
            email: Joi.string().required().regex(emailRegex),

            number: Joi.string().allow(null, ""),
        }),
    }),
    getUser
);

module.exports = router;
