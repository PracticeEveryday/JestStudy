const productController = require("../../controller/products");
const productModel = require("../../models/Product");

const httpMocks = require("node-mocks-http");
const newProduct = require("../data/new-product.json");

// mock 함수
productModel.create = jest.fn();

let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("프로덕트 컨트롤러 Create 함수", () => {
  beforeEach(() => {
    req.body = newProduct;
  });

  it("createProduct 함수일 것이다.", () => {
    // ProductController에 createProduct가 함수인지 파악하는것
    // 예상을 하면서 만드는것
    expect(typeof productController.createProduct).toBe("function");
  });

  it("프로덕트 컨트롤러의 크리에이트프로덕트 함수를 호출하면 프로덕트 모델의 크리에읕 함수가 호출 될 것이다.", async () => {
    // req.body에 newProduct를 넣어준다.
    req.body = newProduct;

    await productController.createProduct(req, res, next);
    // productController의 createProduct가 실행될 때
    // productModel의 create가 호출 되는지 확인한다.
    // DB에 직접적은 영향을 주면 안되기 때문에
    // mock 함수인 jest.fn()을 사용하여 확인한다.
    expect(productModel.create).toBeCalledWith(newProduct);
  });

  // data를 성공적으로 create시 201 반환
  it("201 응답 코드를 반환할 것임", async () => {
    await productController.createProduct(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("응답 코드에 json body를 반환할 것임", async () => {
    productModel.create.mockReturnValue(newProduct);
    await productController.createProduct(req, res, next);
    // res json data가 newProduct와 일치하는지 여부
    expect(res._getJSONData()).toStrictEqual(newProduct);
  });

  it("에러 반환 메시지 확인!!", async () => {
    const errorMessage = { message: "description property missing" };
    const rejectedPromise = Promise.reject(errorMessage);
    productModel.create.mockReturnValue(rejectedPromise);
    await productController.createProduct(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});
