import { Router } from "express";
import db from "../database/createMySQLConnection.js";
import passwordHandler from "../password/password.js";

const router = Router();

router.get("/api/user", (req, res) => {
    db.query("SELECT * FROM users", (error, result) =>{
        if (error) throw error;
        res.send(result);
    });
});

router.post("/api/user", async (req, res) => {
    console.log(req.body)
    const VALUES = [
        [req.body.newEmail || "Email N/A"],
        [req.body.newUsername || "Username N/A"],
        [await passwordHandler.encrypt(req.body.newPassword) || "Password N/A"]
    ];
    db.query("INSERT INTO users (email,username,password) VALUES (?,?,?)",
    VALUES,
    (error,result) =>{
        if (error) throw error;
        res.send({ Result : result })
    });
  });

  router.post("/api/user/login", async (req, res) => {
    console.log("Log on attempted",req.body.username,req.body.password);

    db.query("SELECT EXISTS (SELECT password FROM users WHERE username=?) AS res",
    req.body.username,
    (error, result) =>{
        console.log(result[0].res);
        if(result[0].res){
            db.query("SELECT password FROM users WHERE username=?",
            req.body.username,
            async (error, result) =>{
                if(error)throw error;
                if(await passwordHandler.decrypt(req.body.password,String(result[0].password))){
                    res.send(true);
                    console.log("true");
                }
                else{
                    res.send(false);
                    console.log("false");
                }  
            });
        }
        else{
            res.send(false);
        }
    }); 

    
    
    

    /* const VALUES = [req.body.username,await passwordHandler.encrypt(req.body.password)];
    db.query("SELECT username,password FROM users WHERE username=? AND password=?",
    VALUES,
    (error, result) =>{
        if (error) throw error;
        res.send(result[0] || [null,null]);
    }); */
});

export default router;