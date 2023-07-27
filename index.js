//import all depedensies 

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2")

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"node"
});



app.listen(5000, ()=>{
    console.log("server is running");
})

app.post("/add", (req, res)=>{
    const {sname, email, phone} = req.body;
    const sqlInsert = "insert into student (sname, email,phone) values(?,?,?)";
    db.query(sqlInsert, [sname,email,phone], (err, result)=>{
        err ? console.log(err) : console.log("wow");
    });
});

app.get("/get", (req, res)=>{
    const getdata = "select * from student";
    db.query(getdata, (err, result)=>{
        res.send(result);
    })
})