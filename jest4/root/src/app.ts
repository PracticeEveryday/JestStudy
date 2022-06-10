// app.js
import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/user", (req, res) => {
  res.status(200).json({ name: "modolee" });
});

app.post("/user", (req, res) => {
  const { name } = req.body;

  res.status(201).json({ name });
});

export default app;
