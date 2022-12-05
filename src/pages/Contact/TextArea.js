import React, { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-Right: 20px;
    @media (max-width: 32em){
    width: 100%;
  }
`;



const TextContainer= styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0px;

`;
 
const Title = styled.p`
    font-size: 14px;
    margin: 0px;
    font-weight: bold;
`;

const Div = styled.div`
    width: 3px;
    height: 15px;
    background: rgba(255,153,0,1);
    margin-right: 5px;
`;
 
const TextArea = (props) => {
    
    const TextField = {
        borderColor: '#B9B9B9',
        borderRadius: '4px',
        resize: 'none',
        outlineColor: 'rgba(255,153,0,1)',
    }
  return (
    <Content>
        <TextContainer>
            <Div/>
            <Title>{props.title}</Title>
        </TextContainer>
        <textarea required style={TextField}></textarea>
        {/* <TextField require></TextField> */}
    </Content>
  );
}

export default TextArea;

