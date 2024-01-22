import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/environment";
import UserRouter from "./routers/UserRouter";

export class Server {
  public app: express.Application = express();

  //   constructor work directly.
  constructor() {
    this.setConfigs();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
    // this.userRoutes();
  }
  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: "Not found",
        status_code: 404,
      });
    });
  }
  handleErrors() {
    this.app.use((error, req, res, next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || "Something went wrong,please try again!",
        status_code: errorStatus,
      });
    });
  }
  setConfigs() {
    this.connectMongoDB();
  }
  connectMongoDB() {
    mongoose
      .connect(
        "mongodb+srv://willaustin:willaustin@testnodejs.cvcyxuo.mongodb.net/testnodejs?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("connected to mongodb");
      });
  }
  setRoutes() {
    this.app.use("/api/user", UserRouter);
  }
}
