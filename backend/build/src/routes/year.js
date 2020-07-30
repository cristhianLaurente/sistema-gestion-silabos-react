"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const year_1 = require("../controllers/year");
const authentication_1 = require("../middlewares/authentication");
exports.year_router = express_1.Router();
exports.year_router.post('/year', authentication_1.verificaToken, authentication_1.verificaAdmin_Role, year_1.createYear);
exports.year_router.get('/year/:id', year_1.getAllYear);
