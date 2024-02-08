const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const v1 = require("./routes/index");

app.use("/api/v1", v1);

app.listen(1234, (req, res)=>{
    console.log("server running");
})