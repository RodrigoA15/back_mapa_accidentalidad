import { Sequelize } from "sequelize";
import { SERVICE_NAME, USER, PASSWORD, HOSTNAME, PORT } from "../config.js";

export const QX_DATABASE = async () => {
  sequelize;
};

export const sequelize = new Sequelize(SERVICE_NAME, USER, PASSWORD, {
  host: HOSTNAME,
  port: PORT,
  dialect: "oracle",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
