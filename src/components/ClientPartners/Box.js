import React, { useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  background: white;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  @media (max-width: 32em){
        width: 65px;
        height: 65px;
    }
  @media (max-width: 18em){
    width:50px;
    height:50px;
    margin:5px;
  }

`;

const Container = styled.img`
  width: 80px;
  @media (max-width: 32em){
        width: 50px;
    }
  @media (max-width: 18em){
    width:35px;
  }
`;


const Box = (props) => {
  return (
    <ImageContainer>
        <Container src={props.name}/>
    </ImageContainer>
    
  );
}

export default Box;

