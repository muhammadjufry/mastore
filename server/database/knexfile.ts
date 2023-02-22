// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import ENV from "../config/env";

function knexConfig() {
  // Warning: this might be error
  // I give this statement for yarn run migrate
  /* const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = ENV;
  const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?option/s=project%3D${ENDPOINT_ID}`;
  const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = ENV;
  const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;
  return {
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
  */
  return {
    development: {
      client: "postgresql",
      connection: {
        database: ENV.DATABASE_NAME,
        user: ENV.DATABASE_USER,
        password: ENV.DATABASE_PASSWORD,
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
}

export default knexConfig;
