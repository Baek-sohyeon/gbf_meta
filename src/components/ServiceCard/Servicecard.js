import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Minecraft from '../../image/minecraft.png';

const Card = styled.div`
  background: rgba(255,255,255,1);
  width: 180px;
  height: 250px;
  padding: 20px;
  border-radius: 12px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 64em){
        width: 200px;
        height: 250px;
    }
   @media (max-width: 32em){
      padding: 20px;
      width: 13em;
      height: 170px;
    }
`;

const EnglishText = styled.p`
  color: rgba(255,153,0,1);
  font-size: 10px;
  font-weight: bold;
  margin: 4px;
  margin-top: 10px;
  white-space: nowrap;
`;

const KoreanText = styled.p`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin: 4px;
  white-space: nowrap;
`;

const ExplainText = styled.p`
  color: black;
  font-size: 12px;
  @media (max-width: 32em){
        font-size: 10px
    }
`;

const IconImage = styled.img`
  border-radius: 999px;
  width: 50px;
  height: 50px;
  border: 2px solid rgba(255,153,0,1);
  @media (max-width: 64em){
        width: 35px;
        height: 35px;
    }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


const ServiceCard = (props) => {
  return (
    <Card>
        <Row>
            <Column>
                <EnglishText>{props.english}</EnglishText>
                <KoreanText>{props.korean}</KoreanText>
            </Column>
            <IconImage src={props.image}/>
        </Row>
        
        
        <ExplainText>{props.content}</ExplainText>
        <Button name={'LEARN MORE'} background={'white'} color={'black'}/>
    </Card>
  );
}

export default ServiceCard;

