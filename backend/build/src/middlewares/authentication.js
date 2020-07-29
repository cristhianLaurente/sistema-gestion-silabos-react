"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.verificaToken = (req, res, next) => {
    console.log('encabezado :b');
    // console.log(req.headers)
    let { token } = req.headers;
    jsonwebtoken_1.default.verify(token, 'code', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        req.query.user = decoded.user;
        next();
    });
};
exports.verificaAdmin_Role = (req, res, next) => {
    if (req.query.user.role !== 'TEACHER_ROLE') {
        return res.status(401).json({
            ok: false,
            message: 'El usuario no esta verificado'
        });
    }
    next();
};
exports.verifyStudent = (req, res, next) => {
    if (req.query.user.role !== 'STUDENT_ROLE') {
        return res.status(401).json({
            ok: false,
            message: 'El usuario no esta verificado'
        });
    }
    next();
};
