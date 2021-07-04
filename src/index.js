import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import TicTacToe from './components/TicTacToeApp/TicTacToe';
import Recipes from './components/RecipeApp/Recipes/Recipes';
import RecipeLayout from './components/RecipeApp/Recipe/Recipe';
import CreateRecipe from './components/RecipeApp/Create/CreateRecipe';
import Error from './components/Error/Error';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path='/TicTacToe' component={TicTacToe} exact/>
            <Route path='/Recipes' component={Recipes} exact/>
            <Route path='/Recipes/create' component={CreateRecipe} exact/>
            <Route path='/Recipes/:recipe' component={RecipeLayout} exact/>
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
