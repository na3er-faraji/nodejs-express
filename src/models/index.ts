import mongoose from "mongoose";
import  CONFIG  from "../config/environment";

export async function connectToDatabase() {
  try {
    await mongoose.connect(`${CONFIG.dbUrl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to DB ${CONFIG.dbUrl}`);
  } catch (error) {
    console.error(error);
  }
}

export async function disconnect() {
  try {
    await mongoose.disconnect();
    console.log(`Disconnected from DB ${CONFIG.dbUrl}`);
  } catch (error) {
    console.error(error);
  }
}

export default {
  connectToDatabase,
  disconnect,
};
