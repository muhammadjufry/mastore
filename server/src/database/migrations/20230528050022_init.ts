/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: import("knex").Knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments("id");
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.string("price").notNullable();
    table.string("amount").notNullable();
    table.string("variants").notNullable();
    table.string("paymentMethodName").notNullable();
    table.string("shippingMethodName").notNullable();
    table.string("shippingMethodPrice").notNullable();
    table.string("deliveryAddress").notNullable();
    table.string("sellerName").notNullable();
    table.string("sellerId").notNullable();
    table.string("userId").notNullable();
    table.string("isCanceled").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("orders");
};
