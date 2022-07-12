const { validationResult } = require("express-validator");
const blogPost = require("../models/blog");

exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;

    const errors = validationResult(req);

    const postingan = new blogPost({
        title: title,
        body: body,
        author: {
            uid: 1,
            name: "Agung Maulana",
        },
    });

    if (!errors.isEmpty()) {
        res.status(400).json({
            message: "Terjadi kesalahan pada input yang diberikan",
            data: null,
        });
        return false;
    }

    postingan
        .save()
        .then((thisResult) => {
            const result = {
                message: "Blog Created Successfully",
                data: thisResult,
            };

            res.status(201).json(result);
            next();
        })

        .catch((err) => {
            console.log(err);
            next();
        });
};
