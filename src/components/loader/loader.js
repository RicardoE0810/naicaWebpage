import React from "react";
import logo from '../../images/loader.svg';
import styled, {keyframes} from 'styled-components';
// import styles from "../../styles/loader.module.css"

const slideUp = keyframes`
    0% {
        opacity: 1;
        z-index: 1;
    }
    65%{
        opacity: 1;
        z-index: 1;
    }
    99%{
        opacity: 0;
        z-index: 1;
    }
    100%{
        opacity: 0;
        z-index: -1;
    }
`

const Container = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    animation: ${slideUp} 2.5s forwards ease-in;
    overflow:hidden;
`

class Loader extends React.Component {
    constructor(props) {
        super(props);
    }

 render() {
     return (
        <Container>
            <img className="svgLoader" width='230px' src={logo} alt="logo"/>
        </Container>
     )
    }
}

export default Loader