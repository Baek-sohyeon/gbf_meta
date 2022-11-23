import React, { useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  width: 200px;
  height: 200px;
  border-radius: 12px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 32em){
        width: 120px;
        height: 120px;
    }
  @media (max-width: 18em){
    width: 100px;
    height: 100px;
   }

`;

const Container = styled.img`
  width: 80px;
  @media (max-width: 32em){
        width: 50px;
    }

`;


const Title = styled.p`
  font-size: 18px;
  margin-bottom: 0;
  font-weight: bold;
   @media (max-width: 32em){
        font-size: 14px;
    }
  @media (max-width: 18em){
        font-size: 12px;
  }
`;

const Content = styled.p`
    font-size: 12px;
    margin-top: 0;
    @media (max-width: 32em){
        font-size: 5px;
        padding: 0px 10px
    }
    @media (max-width: 18em){
        font-size: 3px;
    }
    
`;

const IconImage = styled.img`
  border-radius: 999px;
  width: 80px;
  height: 80px;
  @media (max-width: 32em){
        width: 50px;
        height: 50px;
    }
  @media (max-width: 18em){
      width: 30px;
      height: 30px;
  }
`;


const PortBox = (props) => {
  return (
    <ImageContainer>
        <IconImage src={props.image}/>
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
    </ImageContainer>
    
  );
}

export default PortBox;

