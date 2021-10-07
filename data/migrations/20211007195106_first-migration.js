
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', table=>{
    table.increments('recipe_id')
    table.string('recipe_name', 128).notNullable()
  })
  .createTable('steps', table => {
    table.increments('step_id')
    table.string('step_instructions').notNullable()
    table.string('step_number').notNullable()
    table.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipe_id')
    .inTable('recipes')
    .onDelete('CASCADE')
  })
  .createTable('ingredients', table=>{
    table.increments('ingredient_id')
    table.string('ingredient_name')
  })
  .createTable('steps_ingredients', table=>{
    table.increments('step_ingredient_id')
    table.integer('step_id')
    .unsigned()
    .notNullable()
    .references('step_id')
    .inTable('steps')
    .onDelete('CASCADE')
    table.integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('ingredient_id')
    .inTable('ingredients')
    .onDelete('CASCADE')
    table.string('quantity')
  })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
