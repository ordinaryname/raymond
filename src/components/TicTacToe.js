import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './TicTacToe.css'
import anime from 'animejs';

class TicTacToe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: "x",
      playersTurn: true,
      errorMsg: "",
      gridcells:
        [
          {"cell-0":"none", "cell-1":"none", "cell-2":"none", "cell-3":"none", "cell-4":"none", "cell-5":"none", "cell-6":"none", "cell-7":"none", "cell-8":"none", "cell-9":"none", "cell-10":"none", "cell-11":"none", "cell-12":"none", "cell-13":"none", "cell-14":"none", "cell-15":"none", "cell-16":"none", "cell-17":"none", "cell-18":"none", "cell-19":"none", "cell-20":"none", "cell-21":"none", "cell-22":"none", "cell-23":"none", "cell-24":"none", "cell-25":"none", "cell-26":"none", "cell-27":"none", "cell-28":"none", "cell-29":"none", "cell-30":"none", "cell-31":"none", "cell-32":"none", "cell-33":"none", "cell-34":"none", "cell-35":"none", "cell-36":"none", "cell-37":"none", "cell-38":"none", "cell-39":"none", "cell-40":"none", "cell-41":"none", "cell-42":"none", "cell-43":"none", "cell-44":"none", "cell-45":"none", "cell-46":"none", "cell-47":"none", "cell-48":"none", "cell-49":"none", "cell-50":"none", "cell-51":"none", "cell-52":"none", "cell-53":"none", "cell-54":"none", "cell-55":"none", "cell-56":"none", "cell-57":"none", "cell-58":"none", "cell-59":"none", "cell-60":"none", "cell-61":"none", "cell-62":"none", "cell-63":"none", "cell-64":"none", "cell-65":"none", "cell-66":"none", "cell-67":"none", "cell-68":"none", "cell-69":"none", "cell-70":"none", "cell-71":"none", "cell-72":"none", "cell-73":"none", "cell-74":"none", "cell-75":"none", "cell-76":"none", "cell-77":"none", "cell-78":"none", "cell-79":"none", "cell-80":"none",}
        ],
    };
    this.cell = [];
    this.containers = [];
    this.toggleButton = React.createRef();
    this.toggleButtonText = "Switch Player";
    this.encouragementText = "Good Job +2";
    this.playersTurn = true;
    this.turn = 0;
    this.xScore = 0;
    this.oScore = 0;
    this.playerX = true;
    this.highScore = 0;
    this.gameOverPanel = React.createRef();
    this.encouragementPanel = React.createRef();
    this.errorPanel = React.createRef();
    this.optimumScore = 0;
  }

  componentDidMount() {
    if(this.state.player === "x"){
      this.xScoreDiv.classList.add("selectedPlayer");
    } else {
      this.oScoreDiv.classList.add("selectedPlayer");
      this.playerX = false;
    }
  }

  saveGame = () => {}

  loadPreviousGame = () => {}

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
    event.preventDefault();
    this.setState({
      player: "x",
      playersTurn: true,
      errorMsg: "",
      gridcells:
        [
          {"cell-0":"none", "cell-1":"none", "cell-2":"none", "cell-3":"none", "cell-4":"none", "cell-5":"none", "cell-6":"none", "cell-7":"none", "cell-8":"none", "cell-9":"none", "cell-10":"none", "cell-11":"none", "cell-12":"none", "cell-13":"none", "cell-14":"none", "cell-15":"none", "cell-16":"none", "cell-17":"none", "cell-18":"none", "cell-19":"none", "cell-20":"none", "cell-21":"none", "cell-22":"none", "cell-23":"none", "cell-24":"none", "cell-25":"none", "cell-26":"none", "cell-27":"none", "cell-28":"none", "cell-29":"none", "cell-30":"none", "cell-31":"none", "cell-32":"none", "cell-33":"none", "cell-34":"none", "cell-35":"none", "cell-36":"none", "cell-37":"none", "cell-38":"none", "cell-39":"none", "cell-40":"none", "cell-41":"none", "cell-42":"none", "cell-43":"none", "cell-44":"none", "cell-45":"none", "cell-46":"none", "cell-47":"none", "cell-48":"none", "cell-49":"none", "cell-50":"none", "cell-51":"none", "cell-52":"none", "cell-53":"none", "cell-54":"none", "cell-55":"none", "cell-56":"none", "cell-57":"none", "cell-58":"none", "cell-59":"none", "cell-60":"none", "cell-61":"none", "cell-62":"none", "cell-63":"none", "cell-64":"none", "cell-65":"none", "cell-66":"none", "cell-67":"none", "cell-68":"none", "cell-69":"none", "cell-70":"none", "cell-71":"none", "cell-72":"none", "cell-73":"none", "cell-74":"none", "cell-75":"none", "cell-76":"none", "cell-77":"none", "cell-78":"none", "cell-79":"none", "cell-80":"none",}
        ],
    });
    this.optimumScore = 0;
    this.playersTurn = true;
    this.turn = 0;
    this.xScore = 0;
    this.oScore = 0;
    this.playerX = true;
    this.highScore = 0;
    this.gameOverPanel.classList.remove("displayBlock");
    this.toggleButton.classList.remove("displayNone");
    this.encouragementPanel.classList.remove("displayBlock");
    this.errorPanel.classList.remove("displayBlock");
    if(this.oScoreDiv.classList.contains("selectedPlayer")){
      this.oScoreDiv.classList.remove("selectedPlayer");
      this.xScoreDiv.classList.add("selectedPlayer");
    }
    for(var key in this.containers) {
      if(key !== "container-04") {
        this.containers[key].classList.remove("active");
      }
    }
  }

  togglePlayer = (event) => {
    event.preventDefault();
    if(this.state.player === "x"){
      this.setState({player: "o"});
      this.oScoreDiv.classList.add("selectedPlayer");
      this.xScoreDiv.classList.remove("selectedPlayer");
      this.playerX = false;
    } else {
      this.setState({player: "x"});
      this.oScoreDiv.classList.remove("selectedPlayer");
      this.xScoreDiv.classList.add("selectedPlayer");
      this.playerX = true;
    }
  }

  updateCell = (gridNumber, cellName, player) => {
    // Update grid item with player piece
    let cells = this.state.gridcells;
    cells[0][cellName] = player;
    this.setState({errorMsg:"", gridcells:cells});
    if(this.errorPanel.classList.contains("displayBlock")){
      this.errorPanel.classList.remove("displayBlock");
    }
    if(this.playersTurn) {
      this.updateScore(gridNumber, cellName);
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
      let key = "cell-" + ((gridNumber * 9) + i);
      if(this.state.gridcells[0][key] === "none"){
        break;
      } else if(key === "cell-44" && this.state.gridcells[0][key] !== "none") {
        this.containers["container-05"].classList.add("active");
      } else if(key === "cell-53" && this.state.gridcells[0][key] !== "none") {
        this.containers["container-02"].classList.add("active");
      } else if(key === "cell-26" && this.state.gridcells[0][key] !== "none") {
        this.containers["container-01"].classList.add("active");
      } else if(key === "cell-17" && this.state.gridcells[0][key] !== "none") {
        this.containers["container-00"].classList.add("active");
      } else if(key === "cell-8" && this.state.gridcells[0][key] !== "none") {
        this.containers["container-03"].classList.add("active");
      } else if(key === "cell-35" && this.state.gridcells[0][key] !== "none") {
        this.containers["container-06"].classList.add("active");
      } else if(key === "cell-62" && this.state.gridcells[0][key] !== "none") {
        this.containers["container-07"].classList.add("active");
      } else if(key === "cell-71" && this.state.gridcells[0][key] !== "none") {
        this.containers["container-08"].classList.add("active");
      } else if(key === "cell-80" && this.state.gridcells[0][key] !== "none") {
        this.setState({errorMsg:"Game Over"});
        this.gameOverPanel.classList.add("displayBlock");
      }
    }
  }

  selectCell = (event, gridNumber, cellName) => {
    event.preventDefault();
    if(this.state.gridcells[0][cellName] === "none" && this.containers["container-0" + gridNumber].classList.contains("active")) {
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
    } else if (this.state.gridcells[0][cellName] === "x" || this.state.gridcells[0][cellName] === "o") {
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

  cellHtml = (gridNumber, cellType, cellName) => {
    return(
      <div className={"cell " + cellType + " " + cellName} onClick={(event) => this.selectCell(event, gridNumber, cellName)} ref={(element) => {this.cell[cellName] = element;}}>
        {this.renderCell(gridNumber, cellName)}
      </div>
    );
  }

  renderCell = (gridNumber, cellName) => {
    if(this.state.gridcells[0][cellName] === "o") {
      return(
        <svg width="100%" height="100%" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      );
    } else if(this.state.gridcells[0][cellName] === "x") {
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

  renderEncouragement = () => {
    if(!this.encouragementPanel.classList.contains("displayBlock")){
      this.encouragementPanel.classList.add("displayBlock");
    }
    this.animateEncouragement();
  }

  computersMove = (player) => {
    this.playersTurn = false;
    let pickedCellName = '';
    this.optimumScore = 0;
    let highScore = 0;
    let grid = 4;

    let calculateScore = (gridNumber) => {
      if(this.state.gridcells[0]["cell-" + ((gridNumber * 9) + i)] === "none"){
        this.updateScore(gridNumber, "cell-" + ((gridNumber * 9) + i));
        if(highScore <= this.optimumScore){
          highScore = this.optimumScore;
          pickedCellName = "cell-" + ((gridNumber * 9) + i);
          grid = gridNumber;
        }
      }
    }

    for(var i = 0; i < 9;){
      if(this.turn > 0 && this.turn < 9) {
        calculateScore(4);
      } else if(this.turn >= 9 && this.turn < 18) {
        calculateScore(5);
      } else if(this.turn >= 18 && this.turn < 27) {
        calculateScore(2);
      } else if(this.turn >= 27 && this.turn < 36) {
        calculateScore(1);
      } else if(this.turn >= 36 && this.turn < 45) {
        calculateScore(0);
      } else if(this.turn >= 45 && this.turn < 54) {
        calculateScore(3);
      } else if(this.turn >= 54 && this.turn < 63) {
        calculateScore(6);
      } else if(this.turn >= 63 && this.turn < 72) {
        calculateScore(7);
      } else if(this.turn >= 72 && this.turn < 81) {
        calculateScore(8);
      }
      this.optimumScore = 0;
      i++;
    }

    this.animateComputerSelection("." + pickedCellName);
    if(player === "x") {
      this.xScore = this.xScore + highScore;
    } else if(player === "o") {
      this.oScore = this.oScore + highScore;
    }
    this.updateCell(grid, pickedCellName, player);
    this.playersTurn = true;
  }

  updateScore = (gridNumber, cellName) => {
    let encouragement = 0;
    let gridcells = this.state.gridcells;
    let checker = (cell1, cell2, cell3) => {
      if(!this.playersTurn) {
        if(this.state.player === "x"){
          gridcells[0][cellName] = "o";
          this.setState({gridcells:gridcells});
        } else {
          gridcells[0][cellName] = "x";
          this.setState({gridcells:gridcells});
        }
      }

      if(cellName === cell1 || cellName === cell2 || cellName === cell3) {
        if(this.state.gridcells[0][cell1] === "x" && this.state.gridcells[0][cell2] === "x" && this.state.gridcells[0][cell3] === "x") {
          console.log(this.playersTurn);
          if(this.playersTurn) {
            this.xScore += 1;
            encouragement += 1;
            this.anime('.' + cell1 + ' svg', '.' + cell2 + ' svg', '.' + cell3 + ' svg');
          } else {
            this.optimumScore += 1;
          }
        } else if(this.state.gridcells[0][cell1] === "o" && this.state.gridcells[0][cell2] === "o" && this.state.gridcells[0][cell3] === "o") {
          console.log(this.playersTurn);
          if(this.playersTurn) {
            this.oScore += 1;
            encouragement += 1;
            this.anime('.' + cell1 + ' svg', '.' + cell2 + ' svg', '.' + cell3 + ' svg');
          } else {
            this.optimumScore += 1;
          }
        }
      }
    };

    if(this.turn >= 4 && this.turn < 9) {
      //Container 04
      var array = [["cell-36", "cell-37", "cell-38"],["cell-39", "cell-40", "cell-41"],["cell-42", "cell-43", "cell-44"],["cell-36", "cell-39", "cell-42"],["cell-37", "cell-40", "cell-43"],["cell-38", "cell-41", "cell-44"],["cell-36", "cell-40", "cell-44"],["cell-38", "cell-40", "cell-42"]];
      array.forEach(function(element){
        checker(element[0], element[1], element[2]);
      });
    } else if(this.turn >= 9 && this.turn < 18) {
      //Container 05
      array = [["cell-45", "cell-46", "cell-47"],["cell-48", "cell-49", "cell-50"],["cell-51", "cell-52", "cell-53"],["cell-45", "cell-48", "cell-51"],["cell-46", "cell-49", "cell-52"],["cell-47", "cell-50", "cell-53"],["cell-45", "cell-49", "cell-53"],["cell-47", "cell-49", "cell-51"],["cell-46", "cell-45", "cell-38"],["cell-49", "cell-48", "cell-41"],["cell-52", "cell-51", "cell-44"],["cell-45", "cell-38", "cell-37"],["cell-48", "cell-41", "cell-40"],["cell-51", "cell-44", "cell-43"],["cell-52", "cell-48", "cell-38"],["cell-51", "cell-41", "cell-37"],["cell-45", "cell-41", "cell-43"],["cell-46", "cell-48", "cell-44"]];
      array.forEach(function(element){
        checker(element[0], element[1], element[2]);
      });
    } else if(this.turn >= 18 && this.turn < 27) {
      //Container 02
      array = [["cell-18", "cell-19", "cell-20"],["cell-21", "cell-22", "cell-23"],["cell-24", "cell-25", "cell-26"],["cell-18", "cell-21", "cell-24"],["cell-19", "cell-22", "cell-25"],["cell-20", "cell-23", "cell-26"],["cell-18", "cell-22", "cell-26"],["cell-20", "cell-22", "cell-24"],["cell-21", "cell-24", "cell-45"],["cell-22", "cell-25", "cell-46"],["cell-23", "cell-26", "cell-47"],["cell-24", "cell-45", "cell-48"],["cell-25", "cell-46", "cell-49"],["cell-26", "cell-47", "cell-50"],["cell-21", "cell-25", "cell-47"],["cell-24", "cell-46", "cell-50"],["cell-23", "cell-25", "cell-45"],["cell-26", "cell-46", "cell-48"],["cell-25", "cell-45", "cell-41"],["cell-23", "cell-25", "cell-45"],["cell-24", "cell-38", "cell-40"],["cell-22", "cell-24", "cell-38"]];
      array.forEach(function(element){
        checker(element[0], element[1], element[2]);
      });
    } else if(this.turn >= 27 && this.turn < 36) {
      //Container 01
      array = [["cell-9", "cell-10", "cell-11"],["cell-12", "cell-13", "cell-14"],["cell-15", "cell-16", "cell-17"],["cell-9", "cell-12", "cell-15"],["cell-10", "cell-13", "cell-16"],["cell-11", "cell-14", "cell-17"],["cell-9", "cell-13", "cell-17"],["cell-11", "cell-13", "cell-15"],["cell-12", "cell-15", "cell-36"],["cell-13", "cell-16", "cell-37"],["cell-14", "cell-17", "cell-38"],["cell-15", "cell-36", "cell-39"],["cell-16", "cell-37", "cell-40"],["cell-17", "cell-38", "cell-41"],["cell-12", "cell-16", "cell-38"],["cell-14", "cell-16", "cell-36"],["cell-15", "cell-37", "cell-41"],["cell-17", "cell-37", "cell-39"],["cell-13", "cell-17", "cell-45"],["cell-17", "cell-45", "cell-49"],["cell-10", "cell-11", "cell-18"],["cell-13", "cell-14", "cell-21"],["cell-16", "cell-17", "cell-24"],["cell-11", "cell-18", "cell-19"],["cell-14", "cell-21", "cell-22"],["cell-17", "cell-24", "cell-25"],["cell-11", "cell-21", "cell-25"],["cell-10", "cell-14", "cell-24"],["cell-14", "cell-24", "cell-46"],["cell-16", "cell-38", "cell-48"],["cell-16", "cell-14", "cell-18"],["cell-17", "cell-21", "cell-19"],["cell-17", "cell-21", "cell-37"]];
      array.forEach(function(element){
        checker(element[0], element[1], element[2]);
      });
    } else if(this.turn >= 36 && this.turn < 45) {
      //Container 00
      array = [["cell-0", "cell-1", "cell-2"],["cell-3", "cell-4", "cell-5"],["cell-6", "cell-7", "cell-8"],["cell-0", "cell-3", "cell-6"],["cell-1", "cell-4", "cell-7"],["cell-2", "cell-5", "cell-8"],["cell-0", "cell-4", "cell-8"],["cell-2", "cell-4", "cell-6"],["cell-1", "cell-2", "cell-9"],["cell-4", "cell-5", "cell-12"],["cell-7", "cell-8", "cell-15"],["cell-2", "cell-9", "cell-10"],["cell-5", "cell-12", "cell-13"],["cell-8", "cell-15", "cell-16"],["cell-1", "cell-5", "cell-15"],["cell-2", "cell-12", "cell-16"],["cell-5", "cell-15", "cell-37"],["cell-4", "cell-8", "cell-36"],["cell-8", "cell-36", "cell-40"],["cell-7", "cell-5", "cell-9"],["cell-8", "cell-12", "cell-10"]];
      array.forEach(function(element){
        checker(element[0], element[1], element[2]);
      });
    } else if(this.turn >= 45 && this.turn < 54) {
      //Container 03
      array = [["cell-27", "cell-28", "cell-29"],["cell-30", "cell-31", "cell-32"],["cell-33", "cell-34", "cell-35"],["cell-27", "cell-30", "cell-33"],["cell-28", "cell-31", "cell-34"],["cell-29", "cell-32", "cell-35"],["cell-27", "cell-31", "cell-35"],["cell-29", "cell-31", "cell-33"],["cell-27", "cell-6", "cell-3"],["cell-28", "cell-7", "cell-4"],["cell-29", "cell-8", "cell-5"],["cell-30", "cell-27", "cell-6"],["cell-31", "cell-28", "cell-7"],["cell-32", "cell-29", "cell-8"],["cell-32", "cell-28", "cell-6"],["cell-29", "cell-7", "cell-3"],["cell-27", "cell-7", "cell-5"],["cell-28", "cell-8", "cell-12"],["cell-29", "cell-15", "cell-13"],["cell-30", "cell-28", "cell-8"],["cell-31", "cell-29", "cell-15"],["cell-32", "cell-36", "cell-16"],["cell-34", "cell-32", "cell-36"],["cell-35", "cell-39", "cell-37"],["cell-29", "cell-7", "cell-39"],["cell-29", "cell-39", "cell-43"],["cell-28", "cell-32", "cell-42"],["cell-28", "cell-29", "cell-36"],["cell-31", "cell-32", "cell-39"],["cell-34", "cell-35", "cell-42"],["cell-29", "cell-36", "cell-37"],["cell-32", "cell-39", "cell-40"],["cell-35", "cell-42", "cell-43"]];
      array.forEach(function(element){
        checker(element[0], element[1], element[2]);
      });
    } else if(this.turn >= 54 && this.turn < 63) {
      //Container 06
      array = [["cell-54", "cell-55", "cell-56"],["cell-57", "cell-58", "cell-59"],["cell-60", "cell-61", "cell-62"],["cell-54", "cell-57", "cell-60"],["cell-55", "cell-58", "cell-61"],["cell-56", "cell-59", "cell-62"],["cell-54", "cell-58", "cell-62"],["cell-56", "cell-58", "cell-60"],["cell-57", "cell-54", "cell-33"],["cell-58", "cell-55", "cell-34"],["cell-59", "cell-56", "cell-35"],["cell-54", "cell-33", "cell-30"],["cell-55", "cell-34", "cell-31"],["cell-56", "cell-35", "cell-32"],["cell-54", "cell-34", "cell-32"],["cell-57", "cell-55", "cell-35"],["cell-55", "cell-35", "cell-39"],["cell-58", "cell-56", "cell-42"],["cell-56", "cell-42", "cell-40"],["cell-59", "cell-55", "cell-33"],["cell-56", "cell-34", "cell-30"]];
      array.forEach(function(element){
        checker(element[0], element[1], element[2]);
      });
    } else if(this.turn >= 63 && this.turn < 72) {
      //Container 07
      array = [["cell-63", "cell-64", "cell-65"],["cell-66", "cell-67", "cell-68"],["cell-69", "cell-70", "cell-71"],["cell-63", "cell-66", "cell-69"],["cell-64", "cell-67", "cell-70"],["cell-65", "cell-68", "cell-71"],["cell-63", "cell-67", "cell-71"],["cell-65", "cell-67", "cell-69"],["cell-66", "cell-63", "cell-42"],["cell-67", "cell-64", "cell-43"],["cell-68", "cell-65", "cell-44"],["cell-63", "cell-42", "cell-39"],["cell-64", "cell-43", "cell-40"],["cell-65", "cell-44", "cell-41"],["cell-64", "cell-63", "cell-56"],["cell-67", "cell-66", "cell-59"],["cell-70", "cell-69", "cell-62"],["cell-63", "cell-56", "cell-55"],["cell-66", "cell-59", "cell-58"],["cell-69", "cell-62", "cell-61"],["cell-67", "cell-63", "cell-35"],["cell-63", "cell-35", "cell-31"],["cell-67", "cell-65", "cell-51"],["cell-65", "cell-51", "cell-49"],["cell-63", "cell-59", "cell-61"],["cell-63", "cell-43", "cell-59"],["cell-63", "cell-43", "cell-41"],["cell-68", "cell-64", "cell-42"],["cell-64", "cell-42", "cell-32"],["cell-64", "cell-44", "cell-48"],["cell-64", "cell-66", "cell-62"],["cell-65", "cell-43", "cell-39"],["cell-69", "cell-59", "cell-55"],["cell-66", "cell-56", "cell-34"],["cell-70", "cell-66", "cell-56"],["cell-68", "cell-64", "cell-42"]];
      array.forEach(function(element){
        checker(element[0], element[1], element[2]);
      });
    } else if(this.turn >= 72 && this.turn < 81) {
      //Container 08
      array = [["cell-72", "cell-73", "cell-74"],["cell-75", "cell-76", "cell-77"],["cell-78", "cell-79", "cell-80"],["cell-72", "cell-75", "cell-78"],["cell-73", "cell-76", "cell-79"],["cell-74", "cell-77", "cell-80"],["cell-72", "cell-76", "cell-80"],["cell-74", "cell-76", "cell-78"],["cell-75", "cell-72", "cell-51"],["cell-76", "cell-73", "cell-52"],["cell-77", "cell-74", "cell-53"],["cell-72", "cell-51", "cell-48"],["cell-73", "cell-52", "cell-49"],["cell-74", "cell-53", "cell-50"],["cell-73", "cell-72", "cell-65"],["cell-76", "cell-75", "cell-68"],["cell-79", "cell-78", "cell-71"],["cell-72", "cell-65", "cell-64"],["cell-75", "cell-68", "cell-67"],["cell-78", "cell-71", "cell-70"],["cell-72", "cell-68", "cell-70"],["cell-72", "cell-52", "cell-68"],["cell-72", "cell-52", "cell-50"],["cell-72", "cell-44", "cell-40"],["cell-76", "cell-72", "cell-44"],["cell-73", "cell-75", "cell-71"],["cell-75", "cell-73", "cell-53"],["cell-78", "cell-68", "cell-64"],["cell-75", "cell-65", "cell-43"],["cell-79", "cell-75", "cell-65"],["cell-73", "cell-51", "cell-41"],["cell-77", "cell-73", "cell-51"],["cell-74", "cell-52", "cell-48"]];
      array.forEach(function(element){
        checker(element[0], element[1], element[2]);
      });
    }

    if(!this.playersTurn){
      gridcells[0][cellName] = "none";
      this.setState({gridcells:gridcells});
    }
    if(encouragement > 1){
      this.encouragementText = "Good Job! +" + encouragement;
      this.renderEncouragement();
    }
  }

  render() {
    return(
      <div className="Home">
        <div className="box">
          <div className="gameOverPanel" ref={(element) => {this.gameOverPanel = element;}}>
            <h1 className="gameOverTitle">Thanks for playing!</h1>
            {(this.playerX)?(<p className="gameOverText">Your Score: {this.xScore}</p>):(<p className="gameOverText">Your Score: {this.oScore}</p>)}
            <button className="playAgain" onClick={(event) => this.playAgain(event)}>Play Again</button>
          </div>
          <div className="errorMsg" ref={(element) => {this.errorPanel = element;}}>{this.state.errorMsg}</div>
          <div className="encouragement" ref={(element) => {this.encouragementPanel = element;}}>
            <div className="encouragementText">
              {this.encouragementText}
            </div>
          </div>
          <div className="gameContainer">
            <div className="container">
              <div className="scoreboard">
                <div className="score" ref={(element) => {this.xScoreDiv = element;}}>X : {this.xScore}</div><div className="score" ref={(element) => {this.oScoreDiv = element;}}>O : {this.oScore}</div>
              </div>
              <div className="togglePlayer">
                <button className="togglePlayerBtn" onClick={(event) => this.togglePlayer(event)} ref={(element) => {this.toggleButton = element;}}>{this.toggleButtonText}</button>
              </div>
              <div className="container-00" ref={(element) => {this.containers["container-00"] = element;}}>
                {this.cellHtml(0, "cell1", "cell-0")}
                {this.cellHtml(0, "cell2", "cell-1")}
                {this.cellHtml(0, "cell3", "cell-2")}
                {this.cellHtml(0, "cell4", "cell-3")}
                {this.cellHtml(0, "cell5", "cell-4")}
                {this.cellHtml(0, "cell6", "cell-5")}
                {this.cellHtml(0, "cell7", "cell-6")}
                {this.cellHtml(0, "cell8", "cell-7")}
                {this.cellHtml(0, "cell9", "cell-8")}
              </div>
              <div className="container-01" ref={(element) => {this.containers["container-01"] = element;}}>
                {this.cellHtml(1, "cell1", "cell-9")}
                {this.cellHtml(1, "cell2", "cell-10")}
                {this.cellHtml(1, "cell3", "cell-11")}
                {this.cellHtml(1, "cell4", "cell-12")}
                {this.cellHtml(1, "cell5", "cell-13")}
                {this.cellHtml(1, "cell6", "cell-14")}
                {this.cellHtml(1, "cell7", "cell-15")}
                {this.cellHtml(1, "cell8", "cell-16")}
                {this.cellHtml(1, "cell9", "cell-17")}
              </div>
              <div className="container-02" ref={(element) => {this.containers["container-02"] = element;}}>
                {this.cellHtml(2, "cell1", "cell-18")}
                {this.cellHtml(2, "cell2", "cell-19")}
                {this.cellHtml(2, "cell3", "cell-20")}
                {this.cellHtml(2, "cell4", "cell-21")}
                {this.cellHtml(2, "cell5", "cell-22")}
                {this.cellHtml(2, "cell6", "cell-23")}
                {this.cellHtml(2, "cell7", "cell-24")}
                {this.cellHtml(2, "cell8", "cell-25")}
                {this.cellHtml(2, "cell9", "cell-26")}
              </div>
              <div className="container-03" ref={(element) => {this.containers["container-03"] = element;}}>
                {this.cellHtml(3, "cell1", "cell-27")}
                {this.cellHtml(3, "cell2", "cell-28")}
                {this.cellHtml(3, "cell3", "cell-29")}
                {this.cellHtml(3, "cell4", "cell-30")}
                {this.cellHtml(3, "cell5", "cell-31")}
                {this.cellHtml(3, "cell6", "cell-32")}
                {this.cellHtml(3, "cell7", "cell-33")}
                {this.cellHtml(3, "cell8", "cell-34")}
                {this.cellHtml(3, "cell9", "cell-35")}
              </div>
              <div className="active container-04" ref={(element) => {this.containers["container-04"] = element;}}>
                {this.cellHtml(4, "cell1", "cell-36")}
                {this.cellHtml(4, "cell2", "cell-37")}
                {this.cellHtml(4, "cell3", "cell-38")}
                {this.cellHtml(4, "cell4", "cell-39")}
                {this.cellHtml(4, "cell5", "cell-40")}
                {this.cellHtml(4, "cell6", "cell-41")}
                {this.cellHtml(4, "cell7", "cell-42")}
                {this.cellHtml(4, "cell8", "cell-43")}
                {this.cellHtml(4, "cell9", "cell-44")}
              </div>
              <div className="container-05" ref={(element) => {this.containers["container-05"] = element;}}>
                {this.cellHtml(5, "cell1", "cell-45")}
                {this.cellHtml(5, "cell2", "cell-46")}
                {this.cellHtml(5, "cell3", "cell-47")}
                {this.cellHtml(5, "cell4", "cell-48")}
                {this.cellHtml(5, "cell5", "cell-49")}
                {this.cellHtml(5, "cell6", "cell-50")}
                {this.cellHtml(5, "cell7", "cell-51")}
                {this.cellHtml(5, "cell8", "cell-52")}
                {this.cellHtml(5, "cell9", "cell-53")}
              </div>
              <div className="container-06" ref={(element) => {this.containers["container-06"] = element;}}>
                {this.cellHtml(6, "cell1", "cell-54")}
                {this.cellHtml(6, "cell2", "cell-55")}
                {this.cellHtml(6, "cell3", "cell-56")}
                {this.cellHtml(6, "cell4", "cell-57")}
                {this.cellHtml(6, "cell5", "cell-58")}
                {this.cellHtml(6, "cell6", "cell-59")}
                {this.cellHtml(6, "cell7", "cell-60")}
                {this.cellHtml(6, "cell8", "cell-61")}
                {this.cellHtml(6, "cell9", "cell-62")}
              </div>
              <div className="container-07" ref={(element) => {this.containers["container-07"] = element;}}>
                {this.cellHtml(7, "cell1", "cell-63")}
                {this.cellHtml(7, "cell2", "cell-64")}
                {this.cellHtml(7, "cell3", "cell-65")}
                {this.cellHtml(7, "cell4", "cell-66")}
                {this.cellHtml(7, "cell5", "cell-67")}
                {this.cellHtml(7, "cell6", "cell-68")}
                {this.cellHtml(7, "cell7", "cell-69")}
                {this.cellHtml(7, "cell8", "cell-70")}
                {this.cellHtml(7, "cell9", "cell-71")}
              </div>
              <div className="container-08" ref={(element) => {this.containers["container-08"] = element;}}>
                {this.cellHtml(8, "cell1", "cell-72")}
                {this.cellHtml(8, "cell2", "cell-73")}
                {this.cellHtml(8, "cell3", "cell-74")}
                {this.cellHtml(8, "cell4", "cell-75")}
                {this.cellHtml(8, "cell5", "cell-76")}
                {this.cellHtml(8, "cell6", "cell-77")}
                {this.cellHtml(8, "cell7", "cell-78")}
                {this.cellHtml(8, "cell8", "cell-79")}
                {this.cellHtml(8, "cell9", "cell-80")}
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="footer">
          <div className="footerText">&#169; <a href="https://raymondmutyaba.com/" className="copyrightText">Raymond Mutyaba</a> 2019</div>
        </div>
        */}
      </div>
    );
  }

}

export default TicTacToe;
