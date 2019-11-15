exports.up = function(knex) {
  return knex.schema.table("fruits", table => {
    table.string("color", 50);
  });
};

exports.down = function(knex) {
  return knex.schema.table("fruits", table => {
    table.dropColumn("color");
  });
};
