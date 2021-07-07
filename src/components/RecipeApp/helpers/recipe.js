export default class Recipe {
  constructor(recipe) {
    for(var attr in recipe) {
      this[attr] = recipe[attr];
    }
  }

  static categories = ['Featured', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Dessert'];

  static async getRecipe(id) {
    let recipe = sessionStorage.getItem('recipe_' + String(id));
    if(!recipe){
      await fetch(`https://api.raymondmutyaba.com/recipes/getRecipe?recipe_id=${id}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          //Parse data from dynamodb json
          recipe = {};
          recipe.id = Number(Object.values(data.recipe_id)[0]);
          recipe.name = Object.values(data.name)[0];
          recipe.author = Object.values(data.author)[0];
          recipe.calories = Number(Object.values(data.calories)[0]);
          recipe.description = Object.values(data.description)[0];
          recipe.ingredients = new Ingredients();
          Object.values(data.ingredients)[0].forEach((item) => {
            recipe.ingredients.push(Object.values(item)[0]);
          });
          recipe.image_url = Object.values(data.image_url)[0];
          sessionStorage.setItem('recipe_' + String(id), JSON.stringify(recipe));
          recipe = new this(recipe);
        });
    } else {
      console.log(JSON.parse(recipe));
      recipe = new this(JSON.parse(recipe));
    }
    return recipe;
  }

  static getEmptyRecipe() {
    // Error attribute only used for validation when creating new recipes
    let recipe = {
      error: {},
      id: null,
      name: null,
      author: null,
      calories: null,
      description: null,
      ingredients: new Ingredients(),
      image_url: null,
    };
    return new this(recipe);
  }

  static postNewRecipe(recipe) {
    if(recipe instanceof Recipe) {

    }
  }

  static async getList(category) {
    return '';
  }

  set _name(name) {
    if(name.length > 2 && name.length <= 32) {
      this.name = name;
      if(this.error.name){ delete this.error.name;}
    } else {
      this.error.name = "Name must be 3 to 32 characters long";
    }
  }

  set _author(author) {
    if(author.length > 2 && author.length <= 32) {
      this.author = author;
      this.error.author = "";
    } else {
      this.error.author = "Author must be 3 to 32 characters long";
    }
  }

  set _calories(calories) {
    if(calories instanceof Number) {
      if(calories <= 10000) {
        this.calories = calories;
        this.error.calories = "";
      } else {
        this.error.calories = "Calories must be 10000 or less";
      }
    } else {
      this.error.calories = "Calories must be a number";
    }
  }

  set _description(description) {
    if(description.length > 2 && description.length <= 10000) {
      this.description = description;
      this.error.description = "";
    } else {
      this.error.description = "Description must be 3 to 10000 characters long"
    }
  }

  set _ingredients(ingredients) {
    // Validation for ingredients must be done before pushing to the array
    if(ingredients instanceof Ingredients) {
      this.ingredients = ingredients;
    } else if(ingredients instanceof Array) {
      this.ingredients = new Ingredients(...ingredients);
    } else {
      throw new Error(typeof(ingredients) + " is not an Array!");
    }
  }

  set _image_url(image_url) {
    if(image_url.length < 2000) {
      this.image_url = image_url;
    } else {
      this.error.image_url = "Url must be less than 2000 characters";
    }
  }

}

class Ingredients extends Array {
  push(...args) {
    const arr = args.filter((item) => {
      return(item.length < 33 && !args.includes(item.toLowerCase()));
    });
    return super.push(arr);
  }
}
