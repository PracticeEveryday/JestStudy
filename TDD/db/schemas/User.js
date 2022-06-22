import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: string,
});

const User = moongoose.model("User", userSchema);

export { User };
