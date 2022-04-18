import { Router } from "express";
import db from "../database/createMySQLConnection.js"

const router = Router();

router.get("/api/flower", (req, res) => {
    db.query("SELECT * FROM flowers", (error, result) =>{
        if (error) throw error;
        res.send(result);
    });
});

router.post("/api/flower", (req, res) => {
    console.log(req.body)
    const VALUES = [
      [req.body.name || "Name N/A"],[req.body.amount || 0]
    ];
    db.query("INSERT INTO flowers (name,amount) VALUES (?,?)", VALUES, (error,result) =>{
        if (error) throw error;
        res.send({ Result : result })
    });
  });

export default router;