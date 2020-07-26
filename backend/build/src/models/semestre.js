"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.semestreSchema = new mongoose_1.Schema({
    semestre: {
        type: String,
        required: [true, 'the semestre is required']
    },
    state: {
        type: Boolean,
        required: true,
        default: true,
    }
});
