import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  name: String,
  nickname: String,
  email: String,
  capital: Number,
  divisa: String,
  prefered_cryptocurrency: String,
});

export default  mongoose.model("Profile", schema);
