const user = require("../data/user");


const getDashboard = (req, res) => {
    res.render("dashboard", {
        user
    });
};


const getEditProfile = (req, res) => {
    res.render("edit-profile", {
        user
    });
};


const updateProfile = (req, res) => {
    const {
        name,
        email,
        phone,
        address
    } = req.body;

    user.name = name;
    user.email = email;
    user.phone = phone;
    user.address = address;

    res.redirect("/dashboard");
};


module.exports = {
    getDashboard,
    getEditProfile,
    updateProfile
};