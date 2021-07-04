import React, { useState, useEffect } from 'react';
import './CreateRecipe.css';
import Recipe from '../helpers/recipe';

export default function CreateRecipe() {
  const [error, setError] = useState({});
  const [recipe, setRecipe] = useState(Recipe.getEmptyRecipe());

  const updateRecipe = (event) => {
    event.preventDefault();
  }

  const validateField = (event, attr) => {
    event.preventDefault();
    setRecipe((prevRecipe) => {
      prevRecipe[attr] = event.target.value;
      console.log("prevRecipe", prevRecipe);
      return prevRecipe;
    });
  }

  let addedIngredients = [];

  const addIngredient = (ingredientList) => {
    ingredientList = ingredientList.split(",");
    let i = 0;
    for(let item in ingredientList) {
      if(item.trim().length < 33) {
        recipe._ingredients.push(item.trim());
        addedIngredients.push(<div className="ingredient">{ item.trim() }<span className="deleteIngredient" onClick={(event) => { deleteIngredient(event, i); }}>X</span></div>);
        i += 1;
      }
    }
  }

  const deleteIngredient = (event, i) => {
    event.preventDefault();
    recipe._ingredients.splice(i, 1);
    addedIngredients.splice(i, 1);
  }

  const submit = (event) => {
    event.preventDefault();
    if(!recipe.error) {
      console.log(recipe);
      alert("Submitted Recipe!");
    }
  }

  return(
    <div className="createRecipe">
      <div className="recipeForm">
        <h2 className="createRecipeTitle">Create Recipe</h2>
        <form onSubmit={submit}>
          <input type="text" name="recipeName" className="singleLineInput" autoFocus required
            placeholder="Recipe Name"
            onBlur={(event) => { event.preventDefault(); setError(prevError => ({...prevError, name: recipe.error.name})); console.log(recipe.error, error); }}
            onChange={(event) => { validateField(event, "_name"); }}
            minLength="3" maxLength="32"/>
          {error.name ? <div className="errorMessage">{error.name}</div> : null}
          <input type="text" name="recipeAuthor" className="singleLineInput" required
            placeholder="Author"
            onBlur={(event) => { event.preventDefault(); setError(prevError => ({...prevError, author: recipe.error.author})); console.log(recipe.error, error); }}
            onChange={(event) => { validateField(event, "_author"); }}
            minLength="3" maxLength="32"/>
          {error.author ? <div className="errorMessage">{error.author}</div> : null}
          <input type="text" name="recipeCalories" className="singleLineInput" required
            placeholder="Calories Ex: 500"
            onBlur={(event) => { setError(recipe.error); console.log(recipe.error); }}
            onChange={(event) => { validateField(event, "_calories"); }}/>
          {error.calories ? <div className="errorMessage">{error.calories}</div> : null}
          <textarea type="text" name="recipeDescription" className="multiLineInput" required
            placeholder="Description"
            onBlur={(event) => { setError(recipe.error); }}
            onChange={(event) => { validateField(event, "_description"); }}
            minLength="3" maxLength="10000"/>
          {error.description ? <div className="errorMessage">{error.description}</div> : null}
          <input type="text" name="recipeIngredients" className="singleLineInput" required
            placeholder="Ingredients Ex: Chicken, Cheese"
            onBlur={(event) => { setError(recipe.error); }}
            onChange={(event) => { validateField(event, "_ingredients"); }}/>
          {error.ingredients ? <div className="errorMessage">{error.ingredients}</div> : null}
          <div className="addedIngredients">{addedIngredients}</div>
          <input type="url" name="recipeImageUrl" className="singleLineInput" required
            placeholder="Image"
            onBlur={(event) => { setError(recipe.error); }}
            onChange={(event) => { validateField(event, "_image"); }}/>
          {error.image_url ? <div className="errorMessage">{error.image_url}</div> : null}
          <button className="submit" type="submit" onClick={submit}>Create</button>
        </form>
      </div>
    </div>
  );
}
