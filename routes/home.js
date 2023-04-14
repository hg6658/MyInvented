"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = __importDefault(require("express"));
const home_1 = require("../controller/home");
const multerConf_1 = require("../config/multerConf");
const homeRouter = express_1.default.Router();
exports.homeRouter = homeRouter;
homeRouter.get('/', home_1.homePage);
homeRouter.post('/uploadedCSV', multerConf_1.upload.single('csvFile'), home_1.getCSV);
