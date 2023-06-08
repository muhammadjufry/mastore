/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: import("knex").Knex) {
  return knex.schema.createTable("chatDetail", (table) => {
    table.increments("id");
    table.string("sellerName").notNullable();
    table.string("sellerProfile").notNullable();
    table.string("sellerStatus").notNullable();
    table.specificType("chatHistory", "text ARRAY").notNullable();
    table.string("accountId").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("chatDetail");
};
