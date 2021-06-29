//For secure connection:
import * as fs from "fs";

module.exports = {
  type: "cockroachdb",
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: 26257,
  username: "amruta",
  password: "kwA4RXrV4q-_ylhK",
  database: "fast-lion-2374.vault",
  
  //For secure connection:
  ssl: {
     ca: fs.readFileSync('/users/amruta_ranade/downloads/cc-ca.crt').toString()
   },
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
