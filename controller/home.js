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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCSV = exports.homePage = void 0;
const xlsx_1 = __importDefault(require("xlsx"));
const makeTable_1 = require("../config/makeTable");
var homePage = (req, res) => {
    res.render('pages/index', { message: undefined });
};
exports.homePage = homePage;
var getCSV = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log(req.file);
    const workbook = xlsx_1.default.readFile(`C:/Users/91639/OneDrive/Documents/myinvented-assignment/Uploads/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const excelData = xlsx_1.default.utils.sheet_to_json(sheet);
    let headers = [];
    for (let key of Object.keys(excelData[0])) {
        headers.push(key);
    }
    let tableModel = (0, makeTable_1.makeTable)(headers);
    yield tableModel.insertMany(excelData);
    res.render('pages/index', {
        message: 'Success',
        headers,
        excelData
    });
});
exports.getCSV = getCSV;
