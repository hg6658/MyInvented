import express,{Router} from 'express';
import {homeRouter} from './home';
const router: Router  = express.Router();

router.use('/',homeRouter);

export{
    router
}