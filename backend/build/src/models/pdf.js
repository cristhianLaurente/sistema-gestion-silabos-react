"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_autopopulate_1 = __importDefault(require("mongoose-autopopulate"));
exports.pdfSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'the name is required'],
    },
    url: {
        type: String,
        required: [true, 'the url is required']
    },
    state: {
        type: Boolean,
        required: true,
        default: true,
    }
});
exports.pdfSchema.plugin(mongoose_autopopulate_1.default);
