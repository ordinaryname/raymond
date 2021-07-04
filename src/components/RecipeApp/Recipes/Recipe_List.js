import React from 'react';

class Recipe_List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      recipes:{},
      recipes: [],
    };
  }

  getRecipes = () => {
    fetch()
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          items: result.items
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    );
  }

  recipeList = () => {
    return(

    );
  }
  render() {
    return(
      <div className="body">
        <div className="recipe_list">
          {this.recipeList}
        </div>
      </div>
    );
  }
}

export default Recipe_List;
