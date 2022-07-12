const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogPost = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        author: {
            type: Object,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("blogPost", blogPost);
