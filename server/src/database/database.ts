import knex from "knex";
import knexfile from "./knexfile";

const db = knex(knexfile.development);
console.log("DATABASE CONNECTED!");

export default db;
