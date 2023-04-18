import dotenv from "dotenv";
dotenv.config({ path: "../../.env.local" });
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://sayyidmuhammada:Td8xSsOjv2LX@ep-summer-darkness-483194.us-east-2.aws.neon.tech/neondb`;
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
