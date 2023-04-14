import mongoose from 'mongoose';
var makeTable = function(headers: string[]){
    const excelDataSchema = new mongoose.Schema({});
    headers.forEach(function(header: string){
        excelDataSchema.add({
            [header]:{
                type: 'string',
            }
        })
    })
    
    const ExcelDataModel = mongoose.model(`ExcelData-${Date.now()}`, excelDataSchema);
    return ExcelDataModel;
}

export{
    makeTable
}