import React, { useState } from 'react';
import './Recipes.css';
import Recipe from '../helpers/recipe';



const Recipes = () => {
  const [category, setCategory] = useState('Featured');
  const [recipeList, setRecipeList] = useState(() => {
    async function fetchRecipeList() {
      await Recipe.getList(category).then((list) => {
        if(list) {
          setRecipeList(list.map((recipe) => {
            <div className="listItem" key={recipe.name}>
              <a href={"https://raymondmutyaba.com/Recipes/" + String(recipe.id)}>
                <img className="recipeImage" src={recipe.image_url} alt={recipe.name} />
                <h3 className="listItemName">{recipe.name}</h3>
                <ul className="ingredientList">{recipe.ingredients.map(i => <li className="ingredient" key={i}>{i}</li>)}</ul>
              </a>
            </div>
          }))
        }
      });
    }
    return([
      <div className="listItem" key="default">
        <svg className="recipeImage" width="100%" height="100%" viewBox="0 0 24 24">
          <rect width="100%" height="100%" fill="#dddddd" />
        </svg>
        <h3 className="listItemName">{"          "}</h3>
        <ul className="ingredientList">
          <li className="ingredient">{"     "}</li>
          <li className="ingredient">{"     "}</li>
          <li className="ingredient">{"     "}</li>
        </ul>
      </div>
    ]);
  });

  const changeCategory = (event, category) => {
    event.preventDefault();
    setCategory((prevCategory) => {
      if(prevCategory !== category) {
        setRecipeList();
      } else {

      }
      return category;
    });
  }
  let categories = Recipe.categories.map(category => <button className="category" onClick={(event) => { changeCategory(event, category) }} key={category}>{category}</button>);

  return(
    <div className="recipes">
      <div className="recipes-homepage">
        <h1 className="recipes-header">Simple & Easy Recipes</h1>
        <h2 className="recipes-header2">Breakfast, Lunch, Snacks, Dinner, Drinks, and Late Night Munchies. Find it all here.</h2>
        {categories}
        <h3 className="categoryTitle">{category}</h3>
        {recipeList}
        {/*
          <div className="category recipes-breakfast"><span className="recipes-category-label">Breakfast</span></div>
          <div className="category recipes-lunch"><span className="recipes-category-label">Lunch</span></div>
          <div className="category recipes-snacks"><span className="recipes-category-label">Snacks</span></div>
          <div className="category recipes-dinner"><span className="recipes-category-label">Dinner</span></div>
          <div className="category recipes-latenight"><span className="recipes-category-label">Late Night Snacks</span></div>
          <div className="category recipes-drinks"><span className="recipes-category-label">Drinks</span></div>
        */}
      </div>
    </div>
  );
}

export default Recipes;
