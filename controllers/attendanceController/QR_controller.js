// const QR_model = require("../../models/QR");

// /* const{doctor_ID,email}=req.body */



//  function create_QR (){
//     return new Promise(async(req,res) =>
//     {

//         const qr = new QR_model({
//             doctor_ID:req.body.doctor_ID,
//             QR_URL:url_global
//         });
//         try{
//             const savedQR = await qr.save();
//              res.send({'success':true});
//          }catch(err){
//            res.status(400).send(err);
//         }
//     })
// }
// module.exports.create_QR=create_QR