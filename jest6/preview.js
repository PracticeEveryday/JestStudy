const express = require("express");
// app => application 어플리케이션
// 익스프레스 인스턴스를 어플리케이션이라고 한다.
// 서버에 필요한 기능인 미들웨어를 어플리케이션에 추가한다.
// 라우팅 설정이 가능하다.
// 서버를 요청 대기 상태로 만들 수 있다.

// third party middleware
// 1. npm install, yarn add 모듈 설치
// 가져오기 + app.use(넣기)
const morgan = require("morgan");

const app = express();

/**
 * 미들웨어
 *
 * 미들 웨어는 함수들의 연속이다.
 * 일반 미들웨어는 파라미터를 3개 받는다 req, res, next
 */
function logger(req, res, next) {
  console.log("I'm Logger");
  // next 함수를 호출해야 다음 미들웨어로 넘어 갈 수 있다.
  next();
}

function logger2(req, res, next) {
  console.log("I'm Logger2");
  // next 함수를 호출해야 다음 미들웨어로 넘어 갈 수 있다.
  next();
}

const commonMiddleware = (req, res, next) => {
  console.log("commonMiddleware");
  next(new Error("error ouccered"));
};
// 전달 받은 에러를 잘 처리하거나 못했음 next(err)
// 전 객체에서 넘겨준 error parameter를 err 첫 인자로 받음
const errorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  next();
};

/**
 * 라우팅
 * 요청 url에 대해 적절한 핸들러 함수로 연결해주는 기능을 라우팅이라고 한다.
 *
 * 어플리케이션의 get(), post() 메소드로 구현할 수 있다.
 * 라우팅을 위한 전용 Router 클래스를 사용할 수 있다.
 */

/**
 * 요청 객체
 * 클라이언트 요청 정보를 담은 객체를 요청 ( Request) 객체라고 한다.
 *
 * http 모듈의 request 객체를 래핑한 것이다.
 * 한번 래핑한 express 버전의 req, res!!!
 * req.params(), req.query(), req.body() 메소드를 주로 사용한다.
 */
// 미들웨어 순서
app.use(logger); // 1
app.use(logger2); // 2
app.use(morgan("dev"));
app.use(commonMiddleware);
app.use(errorMiddleware);

app.listen(3000, console.log("Server is running"));
