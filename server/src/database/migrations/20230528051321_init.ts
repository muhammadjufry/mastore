/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: import("knex").Knex) {
  return knex.schema.createTable("paymentInfo", (table) => {
    table.increments("id");
    table.string("sendInvoicesToEmail").notNullable();
    table.specificType("paymentCards", "text ARRAY").notNullable();
    table.string("accountId").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("paymentInfo");
};
