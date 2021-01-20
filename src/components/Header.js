import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjectMenu:false,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.closeProjectMenu);
  }

  showProjectMenu = (event) => {
    this.setState(state => ({
      showProjectMenu: !state.showProjectMenu
    }));
  }

  closeProjectMenu = (event) => {
    try {
      if (!this.projectMenu.contains(event.target) & !this.projectLink.contains(event.target)) {
        this.setState({showProjectMenu:false});
      }
    } catch(err) {}
  }

  projectMenuHTML = () => {
    let position_x = this.projectLink.getBoundingClientRect().x;
    let position_y = this.header.getBoundingClientRect().height + 6;
    return(
        <div
          className="project-menu"
          ref={(element) => {this.projectMenu = element;}}
          style={{
            top: position_y,
            left: position_x,
          }}>
          <Link className="project-menu-item" to="/TicTacToe">{'Tic Tac Toe Plus'}</Link>
        </div>
    );
  }

  render() {
    return(
      <header className="header" ref={(element) => {this.header = element;}}>
        <div className="homepage-link">
          <a href="/" className="home-link menu-link">Raymond</a>
        </div>
        <div className="menu">
          <ul className="header-menu">
            <li className="menu-item menu-link" onClick={this.showProjectMenu} ref={(element) => {this.projectLink = element;}}>Projects</li>
            <li className="menu-item menu-link"><a className="menu-link" href="https://github.com/ordinaryname">Github</a></li>
          </ul>
        </div>
        {this.state.showProjectMenu?(this.projectMenuHTML()):(null)}
      </header>
    );
  }
}
export default Header;
