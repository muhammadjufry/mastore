/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: import("knex").Knex) {
  return knex.schema.createTable("answerQuestions", (table) => {
    table.increments("id");
    table.string("questionTittle").notNullable();
    table.string("askerAccountId").notNullable();
    table.string("answerAccountId").notNullable();
    table.string("answerDescription").notNullable();
    table.string("answerDate").notNullable();
    table.string("answerId").notNullable();
    table.string("questionId").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("answerQuestions");
};
