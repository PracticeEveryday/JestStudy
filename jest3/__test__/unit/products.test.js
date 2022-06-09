const productController = require("../../controller/products");
const productModel = require("../../models/Product");
const httpMocks = require("node-mocks-http");
const newProduct = require("../data/new-product.json");

// mock함수
productModel.create = jest.fn();

describe("Product Controller Create", () => {
  it("should have a createProduct function", () => {
    // ProductController에 createProduct가 함수인지 파악하는것
    // 예상을 하면서 만드는것
    expect(typeof productController.createProduct).toBe("function");
  });
  it("should call ProductModel.create", () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const next = null;
    // req.body에 newProduct를 넣어준다.
    req.body = newProduct;
    productController.createProduct(req, res, next);
    // productController의 createProduct가 실행될때
    // productModel의 create가 호출되는지 확인
    // DB에 직접적인 영향을 받으면 안되기 때문에
    // mock함수인 jest.fn()을 확인한다.
    expect(productModel.create).toBeCalledWith(newProduct);
  });
});
