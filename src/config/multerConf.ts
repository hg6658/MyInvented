import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()+'.xls';
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  });
const upload = multer({ storage: storage })

export{
    upload
}