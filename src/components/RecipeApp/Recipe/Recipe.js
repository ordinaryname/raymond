import React, { useState } from 'react';
import './Recipe.css';
import Recipe from '../helpers/recipe';
import { useParams } from "react-router-dom";

export default function RecipeLayout() {
  const recipe_id = Number(useParams().recipe);
  const [recipe, setRecipe] = useState(() => {
    async function fetchRecipe() {
      await Recipe.getRecipe(recipe_id).then(recipe_instance => setRecipe(recipe_instance));
    }
    fetchRecipe();
    return '';
  });



  return(
    <div className="Recipe">
      <div className="recipe_container">
        <h3 className="recipe_name">{recipe ? recipe.name : null}</h3>
        {recipe ? <img className="recipe_image" src={recipe.image_url} alt={recipe.name} /> : null}
        <h4 className="recipe_author">From {recipe ? recipe.author : null}</h4>
        <div className="recipe_calories">{recipe ? Number(recipe.calories) : null} Calories</div>
        <div className="recipe_description">
          <h4 className="ingredients_header">Description:</h4>
          {recipe ? recipe.description : null}
        </div>
        <div className="recipe_ingredients">
          <h4 className="ingredients_header">Ingredients:</h4>
          {recipe ? recipe.ingredients.map(ingredient => <div className="recipe_ingredient" key={ingredient}>{ingredient}</div>) : null}
          {console.log(recipe)}
        </div>
      </div>
    </div>
  );
}
