const express = require("express");
const router = express.Router();
const QR_model = require("../models/QR");
// const QR_Controller = require("../controllers/attendanceController/QR_controller")


var QRCode = require('qrcode')
var url_global="";
QRCode.toDataURL('Hello world', function (err, url) {
    url_global=url;
    console.log(url)
})


// create attendance qr
router.post("/create", async (req,res) =>{

    const qr = new QR_model({
        doctor_ID :req.body.doctor_ID,
        QR_URL :url_global
    });
    try{
        const savedQR = await qr.save();
         res.send({'success':true});
     }catch(err){
       res.status(400).send(err);
    }
})





module.exports =  router;