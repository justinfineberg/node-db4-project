
exports.seed = function(knex) {
      return knex('recipes').insert([
        {recipe_name: 'pasta'},
        {recipe_name: 'big meal'},
        {recipe_name: 'small meal'}
      ]);
};
