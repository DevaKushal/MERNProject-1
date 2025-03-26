const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = require('./routes/route')

app.use(cors());
app.use(express.json());
app.use('/', router);

mongoose.connect('mongodb://localhost:27017/studentdb')
    .then(() => console.log("Connection Established"))
    .catch((error) => console.log("Connection Failed ", error))

app.listen(8000, () => {
    console.log("Server running on 8000");
})
