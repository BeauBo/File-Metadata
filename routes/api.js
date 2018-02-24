const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});


router.post('/upload', upload.single('file'), (req, res, next)=>{
  if(req.file){
    res.json({size: req.file.size});
  }else{
    res.json({error: "Please submit a file!"});
  }

})



module.exports = router;
