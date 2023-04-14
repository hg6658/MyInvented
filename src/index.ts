import dotenv from 'dotenv';
dotenv.config();
import express,{Application} from 'express';
import {router} from './routes';
import db from './config/mongoose';

var ds = db;

const app: Application = express();
app.set('views', (__dirname + "/views"));
app.set('view engine', 'ejs');
app.use(express.static('assets'))
app.use('/',router);

app.listen(8080,():void=>{
    console.log('listening on http://localhost:8080');
})
