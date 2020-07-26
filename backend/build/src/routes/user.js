"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
exports.user_router = express_1.Router();
exports.user_router.post('/checkin', user_1.checkinUser);
exports.user_router.post('/signin', user_1.logged);
