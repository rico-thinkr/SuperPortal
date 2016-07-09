"use strict";
const express = require('express');
function Run() {
    var app = express();
    app.listen(3000, () => {
        console.log("server start at localhost:3000");
    });
}
exports.Run = Run;
