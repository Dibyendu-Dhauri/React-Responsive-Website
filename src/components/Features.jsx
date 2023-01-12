import React from "react";
import styled from "styled-components";
import AppImg from "../img/AppImg.jpg";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
font-size: 60px;
@media only screen and (max-width: 480px) {
  font-size: 50px;
}
`;
const SubTitle = styled.span`
font-size: 40px;
font-style: italic;
margin-top: 30px;
`;
const Desc = styled.p`
font-size: 20px;
color: #777;
margin-top: 20px;
`;
const Button = styled.button`
width: 150px;
padding:20px 20px;
margin-top: 27px;
background-color: darkblue;
color: white;
border-radius: 10px;
font-weight: bold;
font-size: 15px;
border: none;
letter-spacing: 2px;
cursor: pointer;

`;

function Features() {
  return (
    <Container>
      <Left>
        <Image src={AppImg} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business 
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
    </Container>
  );
}

export default Features;
