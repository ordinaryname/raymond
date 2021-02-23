import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

class Recipe_List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes:{},
    };
  }

  getRecipes = () => {

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
