import express from "express";
const app = express();

export const router = app.get("/users", (req, res) =>
  res.send("<h1>Affan Ahmad</h1>")
);
