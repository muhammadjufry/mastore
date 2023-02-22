import knex from "knex";
import knexfile from "./knexfile";

function dbconnect() {
  let retries = 5;
  while (retries > 0) {
    try {
      const db = knex(knexfile().development);
      console.log("Database Successfully Connected!");
      return db;
    } catch (error) {
      console.log(
        "Internal Server Error Cannot connect to DB!, please retrying again..."
      );
      retries -= 1;
      new Promise((res) => setTimeout(res, 2500));
    }
  }
}

export default dbconnect;
