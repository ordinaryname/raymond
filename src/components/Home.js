import React from 'react';
import '../App.css';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
import profile_image from './images/raymond_selfie.jpg';
import anime from 'animejs';

class Home extends React.Component {

  componentDidMount() {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml16');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false}).add({
      targets: '.ml16 .letter',
      translateY: [-100,0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i
    });
  }

  componentWillUnmount() {
    // fix warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  placeholderHtml = () => {
    return(
      <div className="section-item">
        <p className="placeholderText">Placeholder</p>
        <svg width="100%" height="100%" viewBox="0 0 48 48">
          <rect width="100%" height="100%" fill="red" />
        </svg>
      </div>
    );
  }

  render() {
    return(
      <div className="body">
        <Header/>
        <div className="content">
          <div className="title">
            <p className="ml16">Raymond Is Coding</p>
            <div className="vertical-align"><img className="profile_image" src={profile_image} alt="profile"/></div>
          </div>
          <section className="section firstSection">
            <div className="techgrid">
              <div className="techgrid-headers">Languages</div>
              <div className="techgrid-headers">Frameworks</div>
              <div className="techgrid-headers">Services</div>
              <div className="techgrid-items">Python</div>
              <div className="techgrid-items frameworks">Node JS</div>
              <div className="techgrid-items">AWS - EC2</div>
              <div className="techgrid-items">JavaScript</div>
              <div className="techgrid-items frameworks">React JS</div>
              <div className="techgrid-items">AWS - S3</div>
              <div className="techgrid-items">Typescript</div>
              <div className="techgrid-items frameworks">Express JS</div>
              <div className="techgrid-items">AWS - Lambda</div>
            </div>
          </section>
          <section className="section secondSection">
            <h2 className="stackoverflowHeader">Active on StackOverflow!</h2>
            <p className="stackoverflowText">Answering questions on the <span className="so_tag">ReactJS</span>, <span className="so_tag">JavaScript</span>, and <span className="so_tag">Python</span> tags</p>
            <img className="stackoverflow_activity" src="https://raymond-static.s3-us-west-2.amazonaws.com/icloud_downloads/stackoverflow_activity.png" alt="stackoverflow activity" />
          </section>
          <section className="section firstSection">
            <h2 className="section-title">Projects</h2>
            <div className="section-item">
              <Link to="/TicTacToe">
                <div className="project-section">
                  <span className="project-title">TicTacToe</span>
                  <img className="project-image" src="https://raymond-static.s3-us-west-2.amazonaws.com/icloud_downloads/TicTacToe_Screenshot.png" alt="tic tac toe project screenshot"/>
                </div>
              </Link>
            </div>
          </section>
          <section className="section thirdSection">
            <h2 className="section-title">Certifications</h2>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="bfaad651-4208-4776-9073-cf8908f9a5a6" data-share-badge-host="https://www.youracclaim.com"></div>
          </section>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;
