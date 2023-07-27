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
    const {name, email, phone} = req.body;
    const sqlInsert = "insert into student (name, email,phone) values(?,?,?)";
    db.query(sqlInsert, [name,email,phone], (err, result)=>{
        err ? console.log(err) : console.log("wow");
    });
});

app.delete("/delete/:id", (req , res)=>{
    const {id} = req.params;
    const sqlRemove = "delete from student where id = ?";
    db.query(sqlRemove, id, (error, result)=>{
        if(error){
            console.log(error)
        }
    });
});
app.get("/get", (req, res)=>{
    const getdata = "select * from student";
    db.query(getdata, (err, result)=>{
        res.send(result);
    })
})