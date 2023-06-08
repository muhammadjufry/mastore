/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: import("knex").Knex) {
  return knex.schema.createTable("sellers", (table) => {
    table.increments("id");
    table.string("sellerEmail").notNullable();
    table.string("sellerName").notNullable();
    table.string("sellerPic").notNullable();
    table.string("sellerDescription").notNullable();
    table.string("sellerRating").notNullable();
    table.string("sellerStatus").notNullable();
    table.string("sellerProductsSold").notNullable();
    table.string("follower").notNullable();
    table.string("following").notNullable();
    table.specificType("dropshipStore", "text ARRAY").notNullable();
    table.string("sellerId").notNullable();
    table.string("userId").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: import("knex").Knex) {
  return knex.schema.dropTable("chatLists");
};
