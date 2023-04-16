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
    table.string("description").notNullable();
    table.string("product-seller").notNullable();
    table.string("product-source").notNullable();
    table.string("sold").notNullable();
    table.string("star5").notNullable();
    table.string("star4").notNullable();
    table.string("star3").notNullable();
    table.string("star2").notNullable();
    table.string("star1").notNullable();
    table.string("user-rating").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("products");
};
