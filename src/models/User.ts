import * as mongoose from "mongoose";
import { model } from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, require: true },
  phone: { type: String, require: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  type: { type: String, require: true },
  status: { type: String, require: true },
  created_at: { type: Date, require: true, default: new Date() },
  updated_at: { type: Date, require: true, default: new Date() },
});
// go to mongodb
export default model("users", userSchema);
