/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: import("knex").Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("username").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("confirm-password").notNullable();
    table.string("cart-id").notNullable();
    table.string("order-id").notNullable();
    table.string("phone-number").notNullable();
    table.string("address").notNullable();
    table.string("following").notNullable();
    table.string("follower").notNullable();
    table.string("verfication-code").notNullable();
    table.string("user-token-login").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("users");
};
