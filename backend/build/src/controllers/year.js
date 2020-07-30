"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("../db/mongoose");
exports.createYear = (req, res) => {
    let { body, query } = req;
    let objectYear = new mongoose_2.yearModel({
        year: body.year
    });
    objectYear.save((err, yearDB) => {
        if (err) {
            res.status(500).json({
                ok: false,
                content: 'Error en la base de datos',
                err
            });
        }
        res.status(201).json({
            data: yearDB
        });
    });
};
const getCursoByYear = (years) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.startSession();
    session.startTransaction();
    try {
        const opts = { session };
        for (let i = 0; i < years; i++) {
            console.log('object');
            console.log(years[i]);
            console.log(i);
        }
        yield session.commitTransaction();
        session.endSession();
        return 'curso';
    }
    catch (err) {
        yield session.abortTransaction();
        session.endSession();
        throw err;
    }
});
exports.getCursoForYear = (req, res) => {
    let { params } = req;
    getCursoByYear(params.idCurso).then(response => {
        res.status(200).json({
            data: response
        });
    }).catch(err => {
        res.status(500).json({
            err
        });
    });
};
exports.getAllYear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    mongoose_2.yearModel.find()
        .exec((err, years) => {
        for (let i = 0; i < years.length; i++) {
            console.log(years[i]._id);
            if (years[i]._id === id) {
                console.log('igual');
            }
        }
        res.json({ ok: true });
    });
    // let years = [];
    // for await (const year of await yearModel.find()) {
    //     console.log(year._id,'oto'); // Prints documents one at a time
    //     years.push({year})
    // }
    // console.log(years)
});
