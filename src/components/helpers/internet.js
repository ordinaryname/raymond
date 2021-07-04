let request = {
  headers: {
      'Content-Type': 'application/json'
    },
};

export async function getRecipe(id) {
  let recipe = sessionStorage.getItem('recipe_' + String(id));
  if(!recipe){
    await fetch(`https://api.raymondmutyaba.com/recipes/getRecipe?recipe_id=${id}`)
          .then(response => response.json())
          .then(data => {
            recipe = JSON.stringify(data);
            sessionStorage.setItem('recipe_' + String(id), recipe);
          });
  }
  return JSON.parse(recipe);
}

export async function putRecipe(recipe) {
  if(recipe.name && recipe.author && recipe.calories && recipe.description && recipe.ingredients && recipe.image_url) {
    fetch('https://api.raymondmutyaba.com/recipes/putRecipe', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/html, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    }).then(res => res.json()).then(res => console.log(res));
  }
}
