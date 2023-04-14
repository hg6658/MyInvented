"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '.xls';
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
exports.upload = upload;
