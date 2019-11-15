// Implement the changes
exports.up = function(knex) {
  // This is going to make the fruits table.
  // KNEX is promise based.
  return knex.schema.createTable("fruits", table => {
    table.increments("id");
    table
      .string("name", 50)
      .unique()
      .notNullable();
    table.decimal("averageWeightOz").notNullable();
    table.boolean("delicious");
  });
};

// Rollback the changes.
// Rolling back data can cause huge issues.
exports.down = function(knex) {
  // If the table doesn't exist, this will prevent it from having an error.
  return knex.schema.dropTableIfExists("fruits");
};
