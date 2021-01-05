import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import TicTacToe from './components/TicTacToe';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path='/TicTacToe' component={TicTacToe} exact/>
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
