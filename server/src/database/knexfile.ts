import dotenv from "dotenv";
dotenv.config({ path: "../../.env.local" });
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://sayyidmuhammada:e3fkUOB9AVHl@ep-square-mode-806503.us-east-2.aws.neon.tech/neondb`;
export default {
  development: {
    client: "postgresql",
    connection: {
      connectionString: URL,
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
