import { app } from "../app.js";
import config from "../config/index.js";

app.listen(config.PORT, () => console.log(`${config.PORT}번 포트 온`));
