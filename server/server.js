import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import db from "./config/db.js";
import router from "./routes/heroesRouter.js";

const PORT = process.env.PORT || 3000;
const DB_PORT = process.env.DB_PORT;

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/heroes", router);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

db.then(() => {
  app.listen(DB_PORT, function () {
    console.log(`Database connected successfully on port: ${DB_PORT}`);
  });
}).catch((err) => {
  console.log(`Server not running. Error message: ${err.message}`);
  process.exit(1);
});

app.use((req, res) => {
  res.status(404).json({
    status: "Error",
    code: 404,
    message: `Use API on routes: 
    GET	api/heroes - get all Heroes
    POST api/heroes - create a new Hero
    PUT	api/heroes/:id - update a Hero 
    DELETE	api/heroes/:id - remove a Hero`,
    data: "Not found",
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    status: "Fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});
