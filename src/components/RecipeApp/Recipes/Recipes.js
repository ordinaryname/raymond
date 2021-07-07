import React, { useState } from 'react';
import './Recipes.css';
import Recipe from '../helpers/recipe';

const Recipes = () => {
  const fetchRecipeList = (category) => {
    Recipe.getList(category).then((list) => {
      if(list) {
        setRecipeList(list.map((recipe) => {
          return(
            <div className="listItem" key={recipe.name}>
              <a href={"https://raymondmutyaba.com/Recipes/" + String(recipe.id)}>
                <img className="recipeImage" src={recipe.image_url} alt={recipe.name} />
                <h3 className="listItemName">{recipe.name}</h3>
                <ul className="ingredientList">{recipe.ingredients.map(i => <li className="ingredient" key={i}>{i}</li>)}</ul>
              </a>
            </div>
          );
        }))
      } else {
        let list = [];
        for(let i = 0; i < 3; i++) {
          list.push(
            <div className="listItem" key={"default" + String(i)}>
              <svg className="recipeImage" width="100%" viewBox="0 0 25 25">
                <rect width="100%" height="100%" fill="#dddddd" />
              </svg>
              <h3 className="listItemName"><div className="defaultlistItemName">&nbsp;</div></h3>
              <ul className="ingredientList">
                <li className="ingredient">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li className="ingredient">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li className="ingredient">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
              </ul>
            </div>
          );
        }
        setRecipeList(list);
      }
    });
  }

  const [category, setCategory] = useState('Featured');
  const [recipeList, setRecipeList] = useState(() => {
    fetchRecipeList(category);
  });

  const changeCategory = (event, category) => {
    event.preventDefault();
    setCategory((prevCategory) => {
      if(prevCategory !== category) {
        fetchRecipeList(category);
      }
      return category;
    });
  }
  let categories = Recipe.categories.map(c => <button className={category === c ? "category selectedCategory" : "category"} onClick={(event) => { changeCategory(event, c) }} key={c}>{c}</button>);

  return(
    <div className="recipes">
      <div className="recipes-homepage">
        <div className="recipesBannerImageContainer">
          <h1 className="recipes-header">Simple & Easy Recipes</h1>
          <h2 className="recipes-header2">Breakfast, Lunch, Snacks, Dinner, and Late Night Munchies. Find it all here.</h2>
        </div>
        <div className="categoryBar">{categories}</div>
        <div className="recipeList">{recipeList}</div>
      </div>
    </div>
  );
}

export default Recipes;
