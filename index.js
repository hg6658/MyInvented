"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const mongoose_1 = __importDefault(require("./config/mongoose"));
var ds = mongoose_1.default;
const app = (0, express_1.default)();
app.set('views', (__dirname + "/views"));
app.set('view engine', 'ejs');
app.use(express_1.default.static('assets'));
app.use('/', routes_1.router);
app.listen(8080, () => {
    console.log('listening on http://localhost:8080');
});
