/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: import("knex").Knex) {
  return knex.schema.createTable("helpQuestions", (table) => {
    table.increments("id");
    table.string("userOrSellerName").notNullable();
    table.string("userOrSellerPic").notNullable();
    table.string("userOrSellerId").notNullable();
    table.string("userOrSellerQuestion").notNullable();
    table.string("postedDate").notNullable();
    table.string("answerId").notNullable();
    table.string("questionId").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("helpQuestions");
};
