import express from 'express';
import xlsx from 'xlsx';
import {makeTable} from '../config/makeTable';
var homePage: (req : express.Request, res : express.Response)=>void = (req:express.Request,res: express.Response): void => {
    res.render('pages/index',{message: undefined});
}

var getCSV: (req : express.Request, res : express.Response)=>void = async (req:express.Request,res: express.Response): Promise<void> => {
    console.log(req.file);
    const workbook = xlsx.readFile(`C:/Users/91639/OneDrive/Documents/myinvented-assignment/Uploads/${req.file?.filename}`);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const excelData:object[] = xlsx.utils.sheet_to_json(sheet);
    let headers: string[] = [];
    for(let key of Object.keys(excelData[0])){
        headers.push(key);
    }

    let tableModel = makeTable(headers);
    await tableModel.insertMany(excelData);
    res.render('pages/index',{
        message: 'Success',
        headers,
        excelData
    });
}
export{
    homePage,
    getCSV
}