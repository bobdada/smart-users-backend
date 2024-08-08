import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes/user.routes";
import { defaultPort } from "./utilities/constants";
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || defaultPort;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//route not found
app.use("*", (_: Request, res: Response, __: NextFunction) => {
  res.status(404).json({
    status: "ERROR",
    message: "Route is not found",
  });
});

// error handle
app.use((err: any, _: Request, res: Response, __: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "ERROR";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
