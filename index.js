const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

const QrRoutes = require('./routes/QR_routes');



//Routes MiddleWheres

app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
/* app.use(verifyToken) */
app.use('/api/QR', QrRoutes);



//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB'));

    app.listen(3000, () => console.log('Server is up and running'));
    
