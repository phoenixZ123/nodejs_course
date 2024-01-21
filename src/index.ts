import * as express from "express";
import * as mongoose from "mongoose";
import { Server } from "./Server";


let port=3000;
let server=new Server().app;
server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
