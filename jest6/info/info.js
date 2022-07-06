// express => node_modules 안에 npm으로 추가한 외부 모듈이 추가됨.

// git => node_modules 저장 x
// git clone시 바로 사용할 수 없음.
// npm init => 프로젝트 초기화
// package.json 정보 추가!

// http 요청
// 모든 자원은 명사로 식별한다.
// HTTP 경로로 자원을 요청한다.

// GET /users
// GET /users/{id}

// http method
// 서버 자원에 대한 행동을 나타냄
// GET 자원을 조회
// POST 자원을 생성
// PUT 자원을 갱신
// DELETE 자원을 삭제

// 이는 익스프레스 app의 메소드로 구현되어 있음.

// HTTP 상태코드
// 1xx 아직 처리중
// 2xx 여기있어
// 3xx 잘가
// 4xx 니가 문제임
// 5xx 내가 문제임

// TDD 주도 개발
// Test drieven development

// 바로 소스코드 작성 x 테스트 코드 작성 => 하나씩 통과해 나가며 코드 작성

// 시간 오래 걸리지만 유지 보수 시간에서는 더 유용함
// 유지보수 시간이 더 김 개발 보다 !! so TDD 좋다!
// nodejs로 api 서버 만들기
// test 주도 개발!!

// Mocha
// test 코드를 돌려주는 테스트 러너
// test suite 테스트 환경으로 모카에서는 describe()로 구현한다.
// test case : 실제 테스트를 말하며 모카에서는 it()으로 구현한다.

/**
 * node의 assert를 사용하지 말고 third party library를 사용해라!!
 * 슈드 ( should )는 검증 ( assertion ) 라이브러리이다.
 * 가독성 높은 테스트 코드를 만들 수 있다.
 */

/**
 * supertest
 * 단위 테스트 : 함수의 기능 테스트
 * 통합 테스트 : API의 기능 테스트
 * 슈퍼 테스트는 익스프레스 통합 테스트용 라이브러리이다.
 * 내부적으로 익스프레스 서버를 구동하여 실제 요청을 보낸 뒤 결과를 검증한다.
 */
