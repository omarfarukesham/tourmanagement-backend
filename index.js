const express = require('express')
const app = express()
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());

const tourRouter = require('./Routes/tourManageRouter')

app.use('/', tourRouter)

app.listen(5000, () => {
    console.log('Server is running on the :: 5000')
})