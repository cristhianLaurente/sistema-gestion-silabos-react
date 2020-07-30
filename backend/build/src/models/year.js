"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.yearSchema = new mongoose_1.Schema({
    year: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: true
    }
});
