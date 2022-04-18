import express from "express"
import path from "path"
import DB_flower from "./routers/DB_flower.js";
import cors from "cors";
import db from "./database/createMySQLConnection.js"

const app = express();

/* import helmet from "helmet";
app.use(helmet()); */

app.use(cors());
app.use(express.json());
app.use(DB_flower);
app.use(express.static(path.resolve('../client/flowerClient/public')));
 
app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client/flowerClient/public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port:",PORT);
});