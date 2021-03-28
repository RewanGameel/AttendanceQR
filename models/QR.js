const mongoose = require('mongoose');


const QRSchema = new mongoose.Schema({

  doctor_ID:{
    type: Number,
    required: true,
   
  },

  QR_URL:{
    type: String,
    required: true, 
  },

  date:{
    type: Date,
    default: Date.now
  },

 
});



module.exports = mongoose.model('QR', QRSchema)