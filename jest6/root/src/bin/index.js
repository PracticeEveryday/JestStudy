// request(app) 은 서버를 구동함 하지만 index.js에도 서버를 고동하는 코드가 있음
/* app.listen(3000, console.log("3000번 포트 온")); */ // => 서버 구동이 중복으로 일어남
// so index로 분리

import { app } from "../app";
import config from "../config";

app.listen(config.PORT, console.log(`${config.PORT}번 포트 온`));
