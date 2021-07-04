import React, { Component } from 'react';
import './TicTacToe.css'
import anime from 'animejs';

class TicTacToe extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.containers = [];
    this.board = [];
    this.playersTurn = true;
    this.turn = 0;
    this.xScore = 0;
    this.oScore = 0;
    this.optimumScore = 0;
    this.groups = this.getGroups();
  }

  initialState = () => {
    // Reset state when game ends
    return {
      player: "x",
      playersTurn: true,
      errorMsg: "",
      gridcells: new Array(81).fill("none"),
    };
  }

  getGroups = () => {
    // Select group of squares to check based on mod 9 of selected cell number
    let groups = new Array(9).fill([[-9, -18], [-8, -16], [1, 2], [10, 20], [9, 18], [8, 16], [-1, -2], [-10, -20], [-9, 9], [-8, 8], [1, -1], [10, -10]]);
    groups[0] = [[-9, -18], [-8, -16], [1, 2], [10, 20], [9, 18], [-9, 9]];
    groups[1] = [[-9, -18], [-8, -16], [1, 2], [10, 20], [9, 18], [-9, 9], [-8, 8], [1, -1], [10, -10]];
    groups[7] = [[-9, -18], [9, 18], [8, 16], [-1, -2], [-10, -20], [-9, 9], [-8, 8], [1, -1], [10, -10]];
    groups[8] = [[-9, -18], [9, 18], [8, 16], [-1, -2], [-10, -20], [-9, 9]];
    return groups;
  }

  anime = (box1, box2, box3) => {
    anime({
      targets: box1,
      fill: [
        {value: '#cc0000', duration: 3000, delay: 250},
        {value: '#000000', duration: 3000}
      ]
    });
    anime({
      targets: box2,
      fill: [
        {value: '#cc0000', duration: 3000, delay: 500},
        {value: '#000000', duration: 3000}
      ]
    });
    anime({
      targets: box3,
      fill: [
        {value: '#cc0000', duration: 3000, delay: 750},
        {value: '#000000', duration: 3000}
      ]
    });
    anime({
      targets: '.score',
      color: [
        {value: '#cc0000', duration: 1500, delay: 250},
        {value: '#000000', duration: 1500}
      ]
    });
  }

  animateEncouragement = () => {
    anime({
      targets: '.encouragementText',
      color: [
        {value: '#0000cc', duration: 800, easing: 'linear'},
        {value: '#f8f8f8', easing: 'linear'}
      ],
      loop: 2,
    }).finished.then(() => {
      if(this.encouragementPanel.classList.contains("displayBlock")){
        this.encouragementPanel.classList.remove("displayBlock");
      }
    });
  }

  animateComputerSelection = (selection) => {
    anime({
      targets: selection,
      fill: [
        {value: '#0000cc', duration: 1500},
        {value: '#000000', duration: 1500}
      ]
    });
  }

  playAgain = (event) => {
    // Reset all variables to defaults
    event.preventDefault();
    this.containers = [];
    this.board = [];
    this.playersTurn = true;
    this.turn = 0;
    this.xScore = 0;
    this.oScore = 0;
    this.optimumScore = 0;
    this.setState(this.initialState());
    this.gameOverPanel.classList.remove("displayBlock");
  }

  togglePlayer = (event) => {
    event.preventDefault();
    if(this.state.player === "x"){
      this.setState({player: "o"});
      this.oScoreDiv.classList.add("selectedPlayer");
      this.xScoreDiv.classList.remove("selectedPlayer");
    } else {
      this.setState({player: "x"});
      this.oScoreDiv.classList.remove("selectedPlayer");
      this.xScoreDiv.classList.add("selectedPlayer");
    }
  }

  updateCell = (gridNumber, cellName, player) => {
    // Update grid item with player piece ('x' or 'o')
    // Update player's score
    let cells = this.state.gridcells;
    cells[cellName] = player;
    this.setState({errorMsg:"", gridcells:cells});
    if(this.errorPanel.classList.contains("displayBlock")){
      this.errorPanel.classList.remove("displayBlock");
    }
    if(this.playersTurn) {
      this.updateScore(cellName, player);
    }
    this.turn += 1;
    if(!this.toggleButton.classList.contains("displayNone")){
      this.toggleButton.classList.add("displayNone");
    }
    //Display next grid container when current container is full
    this.displayNextContainer(gridNumber);
  }

  displayNextContainer = (gridNumber) => {
    for(var i = 0; i < 9; i++) {
      if(this.state.gridcells[this.getCellNumber(i, gridNumber)] === "none"){
        return;
      }
    }
    if (gridNumber === 8) {
      this.setState({errorMsg:"Game Over"});
      this.gameOverPanel.classList.add("displayBlock");
    } else {
      let nextGridNumber = [3, 0, 1, 6, 5, 2, 7, 8];
      this.containers["container-0" + nextGridNumber[gridNumber]].classList.add("active");
    }
  }

  selectCell = (event, gridNumber, cellName) => {
    event.preventDefault();
    // Check if selected square is empty and part of the active container.
    // Update square with player's piece and start the computer's turn
    if(this.state.gridcells[cellName] === "none" && this.containers["container-0" + gridNumber].classList.contains("active")) {
      this.updateCell(gridNumber, cellName, this.state.player);
      if(this.state.player === "x") {
        if(this.turn !== 81) {
          this.computersMove("o");
        }
      } else {
        if(this.turn !== 81) {
          this.computersMove("x");
        }
      }
    } else if (this.state.gridcells[cellName] === "x" || this.state.gridcells[cellName] === "o") {
      this.setState({errorMsg:"Please select an empty square"});
      if(!this.errorPanel.classList.contains("displayBlock")){
        this.errorPanel.classList.add("displayBlock");
      }
    } else {
      this.setState({errorMsg:"Please select an active square"});
      if(!this.errorPanel.classList.contains("displayBlock")){
        this.errorPanel.classList.add("displayBlock");
      }
    }
  }

  computersMove = (player) => {
    // Computer selects the square which yields the most points
    // Update computer's score and start the player's turn
    this.playersTurn = false;
    let gridOrder = [4, 5, 2, 1, 0, 3, 6, 7, 8];
    let gridNumber = gridOrder[Math.floor(this.turn / 9)];
    let highScore = 0;
    let pickedCell;

    for(var i = 0; i < 9; i++) {
      let cell = this.getCellNumber(i, gridNumber);
      if(this.state.gridcells[cell] === "none") {
        this.updateScore(cell, player);
        if(highScore <= this.optimumScore) {
          highScore = this.optimumScore;
          pickedCell = cell;
        }
      }
      this.optimumScore = 0;
    }

    this.animateComputerSelection(".cell-" + pickedCell);
    if(player === "x") {
      this.xScore = this.xScore + highScore;
    } else if(player === "o") {
      this.oScore = this.oScore + highScore;
    }
    this.updateCell(gridNumber, pickedCell, player);
    this.playersTurn = true;
  }

  updateScore = (cellNumber, player) => {
    // Scan adjacent squares and check for three-in-a-row
    // If computer's turn notify computer of possible points to be scored
    // If player's turn update score and render encouragement for 2+ points scored
    let encouragement = 0;
    let eatCake = (cell1, cell2, cell3) => {
      if(this.playersTurn) {
        this.xScore += 1;
        encouragement += 1;
        this.anime('.cell-' + cell1 + ' svg', '.cell-' + cell2 + ' svg', '.cell-' + cell3 + ' svg');
      } else {
        this.optimumScore += 1;
      }
    };
    // Use mod 9 to check if square is within 2 squares of the left or right edges of the board
    // Select group of squares to check based on mod 9
    this.groups[((cellNumber % 9 ) + 9 ) % 9].forEach((group, i) => {
      if (this.state.gridcells[cellNumber + group[0]] === player && this.state.gridcells[cellNumber + group[1]] === player) {
        eatCake(cellNumber, cellNumber + group[0], cellNumber + group[1]);
      }
    });
    if(encouragement > 1 && this.playersTurn){
      this.encouragementText = "Good Job! +" + encouragement;
      if(!this.encouragementPanel.classList.contains("displayBlock")){
        this.encouragementPanel.classList.add("displayBlock");
      }
      this.animateEncouragement();
    }
  }

  cellHtml = (gridNumber, cellType, cellName) => {
    return(
      <div className={"cell " + cellType + " cell-" + cellName} key={"cell-" + cellName} onClick={(event) => this.selectCell(event, gridNumber, cellName)}>
        {this.renderCell(cellName)}
      </div>
    );
  }

  renderCell = (cellName) => {
    if(this.state.gridcells[cellName] === "o") {
      return(
        <svg width="100%" height="100%" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      );
    } else if(this.state.gridcells[cellName] === "x") {
      return(
        <svg width="100%" height="100%" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      );
    } else {
      return(
        <svg width="100%" height="100%" viewBox="0 0 24 24">
          <rect width="100%" height="100%" fill="none" />
        </svg>
      );
    }
  }

  getCellNumber = (cell, gridNumber) => {
    // Calculate cell number based on grid(container) number
    let c = [0, 1, 2, 9, 10, 11, 18, 19, 20]
    return c[cell] + (gridNumber * 3 + (18 * Math.floor(gridNumber / 3)));
  }

  renderBoard = () => {
    // Render 81 cells in 9 containers
    let board = []
    for (var i = 0; i < 9; i++) {
      let cells = [];
      let c = [0, 1, 2, 9, 10, 11, 18, 19, 20]
      for (var j = 0; j < 9; j++) {
        var cell = c[j] + (i * 3 + (18 * Math.floor(i / 3)));
        cells.push(this.cellHtml(i, "cell" + j, cell));
      }
      let container = "container-0" + i;
      if (this.containers[container]) {
        if (this.containers[container].classList.contains("active")) {
          board.push(<div className={"active " + container} key={container} ref={(element) => {this.containers[container] = element;}}>{cells}</div>);
        } else {
          board.push(<div className={container} key={container} ref={(element) => {this.containers[container] = element;}}>{cells}</div>);
        }
      } else {
        if (i === 4){
          board.push(<div className={"active " + container} key={container} ref={(element) => {this.containers[container] = element;}}>{cells}</div>);
        } else {
          board.push(<div className={container} key={container} ref={(element) => {this.containers[container] = element;}}>{cells}</div>);
        }
      }
    }
    return board;
  }

  render() {
    return(
      <div className="Home">
        <div className="box">
          <div className="gameOverPanel" ref={(element) => {this.gameOverPanel = element;}}>
          {/* Show game over menu after turn 80 */}
            <h1 className="gameOverTitle">Thanks for playing!</h1>
            {(this.state.player === "x")?(<p className="gameOverText">Your Score: {this.xScore}</p>):(<p className="gameOverText">Your Score: {this.oScore}</p>)}
            <button className="playAgain" onClick={this.playAgain}>Play Again</button>
          </div>
          {/* Show error when player selects square which is not active */}
          <div className="errorMsg" ref={(element) => {this.errorPanel = element;}}>{this.state.errorMsg}</div>
          {/* Show encouragement when player scores 2+ points */}
          <div className="encouragement" ref={(element) => {this.encouragementPanel = element;}}>
            <div className="encouragementText">
              {this.encouragementText}
            </div>
          </div>
          <div className="gameContainer">
            <h2 className="gameTitle">Tic Tac Toe</h2>
            <div className="container">
              <div className="scoreboard">
                <div className="score selectedPlayer" ref={(element) => {this.xScoreDiv = element;}}>X : {this.xScore}</div><div className="score" ref={(element) => {this.oScoreDiv = element;}}>O : {this.oScore}</div>
              </div>
              <div className="togglePlayer">
                <button className="togglePlayerBtn" onClick={(event) => this.togglePlayer(event)} ref={(element) => {this.toggleButton = element;}}>{"Switch Player"}</button>
              </div>
              {this.renderBoard()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
