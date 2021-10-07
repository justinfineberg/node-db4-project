
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'tomato'},
        {ingredient_name: 'beef'},
        {ingredient_name: 'pork'}
      ]);
};
