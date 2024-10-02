import express from "express";
import connectionDB from "./dataBase/connection.js";
import cors from "cors";
import homePageRoute from "./routes/homePage-Route.js";
// import shopPageRoute from "./routes/homePage-Route.js";

import "dotenv/config";
const url = process.env.DATABASE_URL;
const port = 5000;
const app = express();

connectionDB(url);

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", homePageRoute);
// app.use("/api", shopPageRoute);

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
