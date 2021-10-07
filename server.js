const express = require('express')

const server = express()

server.use(express.json())


const db = require('./db-config')



server.get('/api/recipe/:id', async (req, res, next)=>{
    
    try{
     
        const recipe = await db('recipes').where('recipe_id', req.params.id)
        const steps = await db('steps').join('recipes', 'steps.recipe_id', 'recipes.recipe_id').where('steps.recipe_id', req.params.id).select('step_id', 'step_instructions', 'step_number')
        const theingredients = await db('ingredients').join('steps_ingredients', 'ingredients.ingredient_id', 'steps_ingredients.ingredient_id').join('steps', 'steps.step_id', 'steps_ingredients.step_id').where('recipe_id', req.params.id)
       
        // let theSteps = [];
        //  steps.forEach(item=>{
        //     theSteps.push( {
        //         "step_id": item[step_id],
        //         "step_number": item[step_number],
        //         "step_instructions": item[step_instructions],
        //         "ingredients": theingredients.filter(ing=>{
        //             if (ing.step_id === item[step_id]){
        //                 return {
        //                     "ingredient_id": ing[ingredient_id],
        //                     "ingredient_name": ing[ingredient_name],
        //                     "quantity": ing[quantity]
        //                 }
        //             }
        //         })
        //     })
        // })
       
        const theSteps = {
            ...steps,
            "ingredients": theingredients
        }
      

        const mainObject = {
            "recipe_id": recipe[0].recipe_id,
            "recipe_name": recipe[0].recipe_name,
            "created_at": Date.now(),
            "steps": theSteps
           
        }
        console.log('----=')
        console.log(mainObject)
        console.log(theSteps)
        res.json(mainObject)
        
    }catch (err){
        res.json(err)
    }
})

server.listen(6969, ()=>{
    console.log('port on 6969')
})