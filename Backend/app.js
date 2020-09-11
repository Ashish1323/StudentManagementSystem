let mysql=require("mysql");
let express=require("express")
var app=express();
require('dotenv').config()


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASS,
    database: "studentdata"
  });


    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "create database studentdata";
        var sql1 = "select * from student"
       
  app.get("/",function(req,res){
        con.query(sql1, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
          });
      });

  })


  app.listen(2000)
