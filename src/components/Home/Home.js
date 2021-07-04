import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import profile_image from '../images/raymond_selfie.jpg';
import anime from 'animejs';

class Home extends React.Component {

  componentDidMount() {
    anime.timeline({loop: false}).add({
      targets: '.ml16 .word',
      translateX: [-300,0],
      easing: "easeOutExpo",
      duration: 2800,
      delay: (el, i) => 100 * i
    });

    //Load certification badges
    const script = document.createElement('script');
    script.src = "https://cdn.youracclaim.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
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
        <div className="content">
          <div className="title">
            <div className="ml16">
              <span className="word w1">Build()</span>
              <span className="word w2">Test()</span>
              <span className="word w3">Deploy()</span>
              <img className="profile_image" src={profile_image} alt="profile"/>
            </div>
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
      </div>
    )
  }
}

export default Home;
