import request from "supertest";
import app from "../src/app";

describe("End-to-End Test", () => {
  describe("GET /user", () => {
    test("responds with json", async () => {
      await request(app)
        .get("/user")
        .set("Accept", "application/json")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect({ name: "modolee" });
    });
  });

  describe("POST /user", () => {
    test("responds with name in json", async () => {
      await request(app)
        .post("/user")
        .set("Accept", "application/json")
        .type("application/json")
        .send({ name: "modolee" })
        .expect(201)
        .expect("Content-Type", /json/)
        .expect({ name: "modolee" });
    });
  });
});
