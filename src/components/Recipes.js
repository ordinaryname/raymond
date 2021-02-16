import React from 'react';
import '../App.css';
import './Recipes.css';
import Header from './Header';
import Footer from './Footer';

class Recipes extends React.Component {
  render() {
    return(
      <div className="recipes">
        <Header />
        <div className="recipes-homepage">
          <h1 className="recipes-header">Simple & Easy Recipes</h1>
          <h2 className="recipes-header2">Breakfast, Lunch, Snacks, Dinner, Drinks, and Late Night Munchies. Find it all here.</h2>
          <div className="category recipes-breakfast"><span className="recipes-category-label">Breakfast</span></div>
          <div className="category recipes-lunch"><span className="recipes-category-label">Lunch</span></div>
          <div className="category recipes-snacks"><span className="recipes-category-label">Snacks</span></div>
          <div className="category recipes-dinner"><span className="recipes-category-label">Dinner</span></div>
          <div className="category recipes-latenight"><span className="recipes-category-label">Late Night Snacks</span></div>
          <div className="category recipes-drinks"><span className="recipes-category-label">Drinks</span></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Recipes;
