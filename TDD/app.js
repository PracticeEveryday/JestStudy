import express from "express";
import routes from "./api/index.js";

const app = express();

app.use(routes());

export { app };
