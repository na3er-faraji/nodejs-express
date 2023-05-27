import mongoose from 'mongoose';
import { DBURL } from "../config";

export async function connectToDatabase() {
  try {
    await mongoose.connect(`${DBURL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`Connected to DB ${DBURL}`);
  } catch (error) {
    console.error(error);
  }
}
