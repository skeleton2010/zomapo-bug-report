"use strict"

const home = (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
};

const report = (req, res) => {
    res.render("home/report");
};

module.exports = {
    home,
    report,
};