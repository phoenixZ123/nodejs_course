import * as mongoose from "mongoose";
import { model } from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
});
// go to mongodb
export default model("users", userSchema);
