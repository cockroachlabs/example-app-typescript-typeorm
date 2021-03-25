//For secure connection:
//import * as fs from "fs";

module.exports = {
  type: "cockroachdb",
  host: "localhost",
  port: 26257,
  username: "username",
  password: "password",
  database: "databasename",
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  //For secure connection:
  /*ssl: {
     ca: fs.readFileSync('certs/cc-ca.crt').toString()
   },*/
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
