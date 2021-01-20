import React from 'react';
import '../App.css';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import profile_image from './images/raymond_selfie.jpg';
import anime from 'animejs';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#f5f6f8',
      actionBackground: 'rgb(0,0,255)',
      actionText: 'Hire Me',
    };
    this.actionIndex = 0;
    this.actionTexts = ['Hire Me', 'raymondmutyaba@gmail.com', '951-345-5877'];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeActionButtonBackground);
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

  action = (event) => {
    event.preventDefault();
    this.actionIndex += 1;
    this.setState({actionText: this.actionTexts[((this.actionIndex % 3) + 3) % 3]});
  }

  changeActionButtonBackground = (event) => {
    let offset = Math.floor((window.pageYOffset / (document.body.clientHeight - window.innerHeight)) * 255);
    this.setState({actionBackground: 'rgb(' + (0 + offset) + ',0,' + (255 - offset) + ')'});
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

  codeBlock = () => {
  }

  check_mark = () => {
    return(
      <svg height="30px" viewBox="0 0 512 512" width="30px" fill="green" xmlns="http://www.w3.org/2000/svg" style={{padding:'10px', float:'left'}}>
        <g stroke="green" strokeWidth="12">
          <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0"/>
        </g>
      </svg>
    );
  }

  render() {
    return(
      <div className="body" style={{
        backgroundColor: this.state.backgroundColor
      }}>
        <Header/>
        <div className="content">
          <div className="title">
            <p className="ml16">Raymond Is Coding</p>
            <div className="vertical-align"><img className="profile_image" src={profile_image} alt="profile"/></div>
          </div>
          <section className="section firstSection">
            <div className="section-item">
              <svg className="bookIcon" viewBox="0 0 45.22 45.22">
                <path d="M40.335,5.811H28.886c-2.586,0-4.878,1.281-6.275,3.242c-1.397-1.961-3.689-3.242-6.275-3.242h-2.591V8.78h2.591c2.605,0,4.706,2.086,4.706,4.691v15.265c0,2.598-2.095,4.734-4.693,4.734H4.887c-1.039,0-1.917-0.868-1.917-1.907V10.63c0-0.646,0.339-1.205,0.848-1.534V5.928C1.612,6.408,0,8.318,0,10.63l0.085,25.803c0,1.863,1.475,3.4,3.336,3.4h15.287c0.057,1.103,0.971,1.951,2.089,1.951h3.75c1.12,0,2.033-0.849,2.09-1.951h15.162c1.861,0,3.336-1.537,3.336-3.4L45.22,10.63C45.222,7.95,43.015,5.811,40.335,5.811z M42.252,31.563c0,1.039-0.878,1.907-1.917,1.907H28.873c-2.598,0-4.692-2.137-4.692-4.734V13.471c0-2.605,2.101-4.691,4.706-4.691h11.449c1.039,0,1.917,0.812,1.917,1.851L42.252,31.563L42.252,31.563z"/>
                <path d="M6.219,15.26c0.085,0.034,0.181,0.051,0.27,0.051c0.185,0,0.369-0.074,0.504-0.211l1.282-1.316c0.131-0.135,0.313-0.211,0.5-0.211c0.188,0,0.369,0.076,0.5,0.211l1.28,1.316c0.135,0.137,0.315,0.211,0.5,0.211c0.087,0,0.198-0.017,0.282-0.051c0.263-0.107,0.456-0.362,0.456-0.646V4.695c0-0.697-0.606-1.26-1.303-1.26H7.06c-0.696,0-1.292,0.563-1.292,1.26v9.919C5.769,14.898,5.957,15.153,6.219,15.26z"/>
              </svg>
            </div>
            <div className="section-item">
              <div className="checklist">
                <div className="checklist-item"><div className="checklist-text">{this.check_mark()}<p className="text"> React JS, Node JS, ExpressJS, Mongo DB</p></div></div>
                <div className="checklist-item"><div className="checklist-text">{this.check_mark()}<p className="text"> AWS: EC2, ELB, S3, CloudFront, Lambda</p></div></div>
              </div>
            </div>
          </section>
          <section className="section secondSection">
            <h2 className="stackoverflowHeader">Active on StackOverflow!</h2>
            <p className="stackoverflowText">Answering questions on the <span className="so_tag">ReactJS</span>, <span className="so_tag">JavaScript</span>, and <span className="so_tag">Python</span> tags</p>
            <img className="stackoverflow_activity" src="https://raymond-static.s3-us-west-2.amazonaws.com/icloud_downloads/stackoverflow_activity.png" alt="stackoverflow activity" />
          </section>
          <section className="section firstSection">
            <div className="section-item">
              <div className="project-section">
                <span className="project-title">TicTacToe</span>
                <img className="project-image" src="https://raymond-static.s3-us-west-2.amazonaws.com/icloud_downloads/TicTacToe_Screenshot.png" alt="tic tac toe project screenshot"/>
              </div>
            </div>
          </section>
          <div className="social-icons">
            <div href="https://github.com/ordinaryname" className="github_thumbnail">
              <svg className="github" viewBox="0 0 120.78 117.79" style={{backgroundColor: this.state.backgroundColor}}>
                <path d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z" fill="#191717" fillRule="evenodd"/>
                <path d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z" fill="#191717"/>
                <path d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z" fill="#191717"/>
                <path d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z" fill="#191717"/>
                <path d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z" fill="#191717"/>
                <path d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z" fill="#191717"/>
                <path d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z" fill="#191717"/>
                <path d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z" fill="#191717"/>
              </svg>
              <img className="social_img" src="https://raymond-static.s3-us-west-2.amazonaws.com/icloud_downloads/github_screenshot_thumbnail.png" alt="github website screenshot"/>
            </div>
            <div href="https://www.instagram.com/raymondmutyaba/" className="instagram_thumbnail">
              <svg className="instagram" viewBox="0 0 503.84 503.84" style={{backgroundColor: this.state.backgroundColor}}>
                <path d="M256,49.47c67.27,0,75.23.26,101.8,1.47,24.56,1.12,37.9,5.22,46.78,8.67a78,78,0,0,1,29,18.85,78,78,0,0,1,18.85,29c3.45,8.88,7.55,22.22,8.67,46.78,1.21,26.57,1.47,34.53,1.47,101.8s-.26,75.23-1.47,101.8c-1.12,24.56-5.22,37.9-8.67,46.78a83.51,83.51,0,0,1-47.81,47.81c-8.88,3.45-22.22,7.55-46.78,8.67-26.56,1.21-34.53,1.47-101.8,1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78,78,0,0,1-29-18.85,78,78,0,0,1-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23,1.47-101.8c1.12-24.56,5.22-37.9,8.67-46.78a78,78,0,0,1,18.85-29,78,78,0,0,1,29-18.85c8.88-3.45,22.22-7.55,46.78-8.67,26.57-1.21,34.53-1.47,101.8-1.47m0-45.39c-68.42,0-77,.29-103.87,1.52S107,11.08,91,17.3A123.68,123.68,0,0,0,46.36,46.36,123.68,123.68,0,0,0,17.3,91c-6.22,16-10.48,34.34-11.7,61.15S4.08,187.58,4.08,256s.29,77,1.52,103.87S11.08,405,17.3,421a123.68,123.68,0,0,0,29.06,44.62A123.52,123.52,0,0,0,91,494.69c16,6.23,34.34,10.49,61.15,11.71s35.45,1.52,103.87,1.52,77-.29,103.87-1.52S405,500.92,421,494.69A128.74,128.74,0,0,0,494.69,421c6.23-16,10.49-34.34,11.71-61.15s1.52-35.45,1.52-103.87-.29-77-1.52-103.87S500.92,107,494.69,91a123.52,123.52,0,0,0-29.05-44.62A123.68,123.68,0,0,0,421,17.3c-16-6.22-34.34-10.48-61.15-11.7S324.42,4.08,256,4.08Z" transform="translate(-4.08 -4.08)"/>
                <path d="M256,126.64A129.36,129.36,0,1,0,385.36,256,129.35,129.35,0,0,0,256,126.64ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z" transform="translate(-4.08 -4.08)"/>
                <circle cx="386.4" cy="117.44" r="30.23"/>
              </svg>
              <img className="social_img" src="https://raymond-static.s3-us-west-2.amazonaws.com/icloud_downloads/intercontinental_la_downtown_suite_night_thumbnail.jpg" alt="intercontinental downtown los angeles hotel suite"/>
            </div>
            <div href="https://stackoverflow.com/users/5563191/raymond-mutyaba" className="stackoverflow_thumbnail">
              <svg className="stackoverflow" viewBox="0 0 120 120" style={{backgroundColor: this.state.backgroundColor}}>
                <path fill="#bcbbbb" d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"/>
                <path fill="#f48023" d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"/>
              </svg>
              <img className="social_img" src="https://raymond-static.s3-us-west-2.amazonaws.com/icloud_downloads/stackoverflow_screenshot_thumbnail.png" alt="stackoverflow website screenshot"/>
            </div>
          </div>
        </div>
        <button className="action" onClick={this.action} style={{backgroundColor:this.state.actionBackground}}>{this.state.actionText}</button>
        <Footer/>
      </div>
    )
  }
}

export default Home;
