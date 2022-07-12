exports.createProducts = (req, res, next) => {
    const name = req.body.nama;
    const data = req.body.data;
    res.json({
        message: "Create Product Success",
        datas: {
            nama: name,
            dataa: data,
        },
    });
    next();
};

exports.getAllProducts = (req, res, next) => {
    res.json({
        message: "Get All Product Success",
        data: "Agus",
    });
    next();
};
