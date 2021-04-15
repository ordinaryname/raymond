import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

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
        <Header />
        <div className="recipe_list">
          {this.recipeList}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Recipe_List;
