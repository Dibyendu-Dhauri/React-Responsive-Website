import React from "react";
import styled,{css} from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const FeatureShape = styled.div`
  height: 100%;
  width: 100%;
  clip-path: polygon(43% 0, 75% 0, 96% 91%, 63% 92%);
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;

  background-color: pink;
  
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;

  
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

function App() {
  const SmallScreem = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
      </Container>
      <Container>
        <Features />
        <FeatureShape />
      </Container>

      <Container>
        <Service />
        { ! SmallScreem && <ServiceShape/>}
      </Container>

      <Container>
        <Price />
        <PriceShape/>
      </Container>

      <Container>
        <Contact />
        <Footer/>
      </Container>
    </>
  );
}

export default App;
