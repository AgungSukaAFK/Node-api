exports.register = (req, res, next) => {
    const nama = req.body.nama;
    const email = req.body.email;
    const password = req.body.password;

    const result = {
        message: "Auth success",
        data: {
            uid: 1,
            nama,
            email,
        },
    };

    res.status(201).json(result);

    next();
};
