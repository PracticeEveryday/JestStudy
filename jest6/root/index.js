import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import routers from "./src/api";

const app = express();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routers());

app.listen(3000, console.log("3000번 포트 온"));

export { app };
