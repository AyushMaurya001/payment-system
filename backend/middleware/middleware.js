const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const config = require("../config");
const JWT_SECRET = config.JWT_SECRET;

function authMiddleware(req, res, next){
    const authorization = req.headers.authorization;
    if (!authorization.startsWith('Bearer ')){
        return res.status(403).json({
            msg: "token verification unsuccessful"
        })
    }
    const token = authorization.split(' ');
    try {
        const decoded = jwt.verify(token[1], JWT_SECRET);
        const userId = decoded.userId;
        req.userId = userId;
        next();
    } catch (err){
        return res.status(403).json({
            msg: "token verification unsuccessful"
        })
    }
}

module.exports = {
    authMiddleware,
}