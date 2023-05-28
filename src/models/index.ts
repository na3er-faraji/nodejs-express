import mongoose from "mongoose";
import  CONFIG  from "../config/environment";
import logger from '../config/winston';

export async function connectToDatabase() {
  try {
    await mongoose.connect(`${CONFIG.dbUrl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info(`Connected to DB ${CONFIG.dbUrl}`);
  } catch (error) {
    logger.error(error);
  }
}

export async function disconnect() {
  try {
    await mongoose.disconnect();
    logger.info(`Disconnected from DB ${CONFIG.dbUrl}`);
  } catch (error) {
    logger.error(error);
  }
}

export default {
  connectToDatabase,
  disconnect,
};
