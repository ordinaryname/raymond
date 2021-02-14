import React from 'react';
import '../App.css';
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
          <div className="category recipes-breakfast">Breakfast</div>
          <div className="category recipes-lunch">Lunch</div>
          <div className="category recipes-snacks">Snacks</div>
          <div className="category recipes-dinner">Dinner</div>
          <div className="category recipes-latenight">Late Night Snacks</div>
          <div className="category recipes-drinks">Drinks</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Recipes;
