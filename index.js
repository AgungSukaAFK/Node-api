const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const productsRoutes = require("./src/routes/products");
const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use("/v1/customer", productsRoutes);

app.use("/v1/auth", authRoutes);

app.use("/v1/blog", blogRoutes);

mongoose
    .connect("mongodb+srv://agung:1@cluster0.1dcxd.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(4000);
        console.log("Koneksi berhasil!");
    })
    .catch((err) => console.log(err));
