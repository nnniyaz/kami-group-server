const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/router');
const fileUpload = require('express-fileupload');

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.mzvx8p6.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('static'));
app.use(fileUpload());
app.use('/api', router);

const start = async () => {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT} PORT.`));
    } catch (error) {
        console.log(error)
    }
}

start()