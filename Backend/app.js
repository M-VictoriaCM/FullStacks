import express from "express";
import db from "./database/db.js";
import cors from "cors";
import PostRouter from "./routes/PostRouter.js";

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/post", PostRouter);

const conexionDB = async () => {
  // conexion a la base de datos
  try {
    await db.authenticate();
    console.log("conectado ok a la DB");
  } catch (error) {
    console.log(`error de conexion ${error}`);
  }
};
conexionDB()

app.listen(port, conexionDB);
