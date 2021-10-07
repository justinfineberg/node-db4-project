
exports.seed = function(knex) {
      return knex('steps').insert([
        {step_instructions: 'open pasta', recipe_id: 1, step_number:1},
        {step_instructions: 'cook pasta', recipe_id: 1, step_number:2},
        {step_instructions: 'cook big meal', recipe_id: 2, step_number:1},
        {step_instructions: 'cook small meal', recipe_id: 3, step_number:1}
      ]);

};
