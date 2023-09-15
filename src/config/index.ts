import * as dotenv from 'dotenv'
dotenv.config()
import appConfig from "./app.config";
import authConfig from "./auth.config";
import databaseConfig from "./database.config";

export default {
  database: databaseConfig,
  auth: authConfig,
  app: appConfig,
};