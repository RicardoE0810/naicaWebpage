import React from "react";
import Loader from "./components/loader/loader";

// import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//all the css animations need gsap as dependency
// import "./styles/styles.css";
import logo from './images/logo.svg'


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.controller = new ScrollMagic.Controller();
  // }

  componentDidMount() { 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#trigger",
        start: "top top",
        end: "bottom top",
        scrub: 0.1
      }
    });

    gsap.utils.toArray(".parallax").forEach(layer => {
      console.log(layer)
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      tl.to(layer, {y: movement, ease: "none"}, 0)
    });


    const tlLogo = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger",
        start: "bottom bottom",
        end: "bottom 100%",
        scrub: 0.6,
        markers:true
      }
    });
    tlLogo.to(".box", {yPercent: 0, duration: 20, opacity:0, startAt: {y: -20, opacity: 0}})
    tlLogo.to(".box", {duration: 20, opacity:0,})
    tlLogo.to(".box", {xPercent: -40, duration: 5, opacity:1})
  }

  render() {
    return (
      <>
        {/* <Loader />  */}
        <div className="trigger" id="trigger">
          <div loading="lazy" className='layer-bg layer parallax' data-depth='0.10'></div>
          <div loading="lazy" className='layer-1 layer parallax' data-depth='0.25'></div>
          <div loading="lazy" className='layer-2 layer parallax' data-depth='0.35'></div>
          <div loading="lazy" className='layer-3 layer parallax' data-depth='0.40'></div>
            <div className='box'>
              <img loading="lazy" width='150px' src={logo} alt="logo"/>
               <div className='textCont'>
                <h1>proyectos</h1>
                <h1>que trascienden</h1>
               </div>
            </div>
        </div>
        <div className='newBox'> </div>
          {/* <div className="firstImage">
          </div> */}
      </>
    );
  }
}

export default App;