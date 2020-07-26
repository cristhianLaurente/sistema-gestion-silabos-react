"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.yearSchema = new mongoose_1.Schema({
    yearacamic: {
        type: String,
        required: [true, 'the yearacademic is required']
    },
    state: {
        type: Boolean,
        required: true,
        default: true,
    }
});
