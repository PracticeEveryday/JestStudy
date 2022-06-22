const errorMiddleware = (error, req, res, next) => {
  console.log("\x1b[33m%s\x1b[0m", error);
  res.json({
    status: "fail",
    statusCode: res.statusCode,
    message: error.message,
  });
};

export { errorMiddleware };
