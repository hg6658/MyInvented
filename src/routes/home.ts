import express,{Router} from 'express';
import {homePage,getCSV} from '../controller/home';
import {upload} from '../config/multerConf';
const homeRouter: Router  = express.Router();

homeRouter.get('/',homePage);
homeRouter.post('/uploadedCSV',upload.single('csvFile'),getCSV);
export {
    homeRouter
}