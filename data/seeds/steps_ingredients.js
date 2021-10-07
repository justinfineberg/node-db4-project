
exports.seed = function(knex) {
      return knex('steps_ingredients').insert([
        {step_id: 1, ingredient_id: 2, quantity: 'a lot', },
        {step_id: 2, ingredient_id: 3, quantity: 'a little'},
        {step_id: 3, ingredient_id: 3, quantity: 'many'}
      ]);
};
