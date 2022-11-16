import React, { useState } from "react";
import styled from "styled-components";

const ContactButton = styled.div`
  width: 80px;
  height: 12px;
  padding: 8px 10px;
 text-align: center;
  &:hover {
    cursor: pointer;
    
  }
  font-size: 11px;
  font-weight: bold;
  margin-right: 10px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  background : ${(props) => props.background}
 
`;

const Button = (props) => {
  return (
    <ContactButton {...props}>
        {props.name}
    </ContactButton>
  );
}

export default Button;

