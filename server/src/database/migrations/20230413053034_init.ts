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
    table.string("confirmPassword").notNullable();
    table.string("cartId").notNullable();
    table.string("orderId").notNullable();
    table.string("phoneNumber").notNullable();
    table.string("address").notNullable();
    table.string("following").notNullable();
    table.string("follower").notNullable();
    table.string("verficationCode").notNullable();
    table.string("userTokenLogin").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("users");
};
