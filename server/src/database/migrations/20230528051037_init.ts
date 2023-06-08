/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: import("knex").Knex) {
  return knex.schema.createTable("userRating", (table) => {
    table.increments("id");
    table.string("userId").notNullable();
    table.string("userFulName").notNullable();
    table.string("userProfileImage").notNullable();
    table.string("commentedDate").notNullable();
    table.string("rating").notNullable();
    table.string("ratingDescription").notNullable();
    table.string("productName").notNullable();
    table.string("sellerId").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("userRating");
};
