/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: import("knex").Knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id");
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.string("price").notNullable();
    table.specificType("variants", "text ARRAY").notNullable();
    table.string("description").notNullable();
    table.string("stock").notNullable();
    table.string("productSeller").notNullable();
    table.string("productSource").notNullable();
    table.string("sold").notNullable();
    table.string("star5").notNullable();
    table.string("star4").notNullable();
    table.string("star3").notNullable();
    table.string("star2").notNullable();
    table.string("star1").notNullable();
    table.string("rating").notNullable();
    table.string("sellerId").notNullable();
    table.string("userRatingId").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("products");
};
