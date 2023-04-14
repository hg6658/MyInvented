"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTable = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var makeTable = function (headers) {
    const excelDataSchema = new mongoose_1.default.Schema({});
    headers.forEach(function (header) {
        excelDataSchema.add({
            [header]: {
                type: 'string',
            }
        });
    });
    const ExcelDataModel = mongoose_1.default.model(`ExcelData-${Date.now()}`, excelDataSchema);
    return ExcelDataModel;
};
exports.makeTable = makeTable;
