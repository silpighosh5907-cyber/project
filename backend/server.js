const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectdb = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectdb();

app.get("/",(req,res)=>{
    res.send("api is working");
});
app.use('/api/jobs',jobRoutes);

const port = process.env.PORT || 5600;
app.listen(port,()=>{
    console.log("server is running port 5600");
});