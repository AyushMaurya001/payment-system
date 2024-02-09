const express = require("express");
const app = express();
app.use(express.json());

const path = require("path");

const cors = require("cors");
app.use(cors());

const v1 = require("./routes/index");

app.use("/api/v1", v1);

app.get("/", (req, res)=>{
    app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
})

app.listen(1234, (req, res)=>{
    console.log("server running");
})