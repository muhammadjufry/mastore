/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex: import("knex").Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("user_id").notNullable().unique();
    table.string("phone_number").unique();
    table.string("order_history_id").notNullable().unique();
    table.string("cart_id").notNullable().unique();
    table.string("isSeller").notNullable();
    table.string("sellerId").notNullable().unique();
    table.string("isVerified").notNullable();
    table.string("verifyToken").notNullable().unique();
    table.string("isBlock").notNullable();
    table.string("password").notNullable();
    table.string("confirmPassword").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("users");
};
