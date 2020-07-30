"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const required = (field) => {
    return [true, `the ${field} is required`];
};
exports.silaboSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: required('title')
    },
    year: {
        type: String
    },
    semestre: {
        type: String,
        required: required('semestre')
    },
    pdfname: {
        type: String,
        required: true
    },
    pdfurl: {
        type: String,
        required: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: required('user')
    },
    state: {
        type: Boolean,
        required: true,
        default: true,
    }
});
