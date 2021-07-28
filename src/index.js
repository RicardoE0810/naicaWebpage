import React from "react";
import ReactDOM from "react-dom";
import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./styles.css";
//all the css animations need gsap as dependency
import logo from './logo.svg'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() { 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger",
        start: "center center",
        end: "bottom -60%",
        scrub: true,
        markers: true
      }
    });
    tl.to(".box", {yPercent: 700, duration: 15})
    tl.to(".box", {rotation: 360, duration: 5})
    tl.to(".box", {xPercent: 250, duration: 5})
  }

  render() {
    return (
      <>
        <div className="trigger">
          <img className="box" width='250px' src={logo} alt="logo"/>
          <div className="black-background"></div>
          <div className="firstImage"></div>
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
