"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    console.log(`PathName is: ${req.path}`);
    next();
};
