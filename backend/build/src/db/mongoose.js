"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const user_1 = require("../models/user");
const silabo_1 = require("../models/silabo");
const curso_1 = require("../models/curso");
exports.connect__mongoDB = () => {
    mongoose_1.default.set('useFindAndModify', false);
    mongoose_1.default.connect('mongodb://localhost:27020', {
        useCreateIndex: true,
        useNewUrlParser: true,
        dbName: 'sgl',
        useUnifiedTopology: true
    })
        .then(() => {
        console.log('=======================================================');
        console.log('===========MongoDB connect successfully===========');
        console.log('=======================================================');
    })
        .catch((err) => {
        console.log('=======================================================');
        console.log(err);
        console.log('===========Failed to connect database===========');
    });
};
exports.userModel = mongoose_1.model('User', user_1.userSchema);
exports.silaboModel = mongoose_1.model('Silabo', silabo_1.silaboSchema);
exports.cursoModel = mongoose_1.model('Curso', curso_1.cursoSchema);
