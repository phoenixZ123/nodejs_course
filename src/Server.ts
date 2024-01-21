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
    // this.userRoutes();
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
