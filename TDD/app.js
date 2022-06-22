import express from "express";
import routes from "./api/index.js";
import { errorMiddleware } from "./api/middlewares/errorMiddleware.js";
const app = express();

app.use(routes());
app.use(errorMiddleware);
export { app };
