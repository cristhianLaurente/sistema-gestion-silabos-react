"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const authentication_1 = require("../middlewares/authentication");
exports.user_router = express_1.Router();
exports.user_router.post('/checkin', user_1.checkinUser);
exports.user_router.post('/signin', user_1.logged);
exports.user_router.get('/user', authentication_1.verificaToken, authentication_1.verifyStudent, user_1.getUser);
