import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const mainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background:rgba(0, 0, 0, 0.5);
`;

export const mainImg = styled.img`
  width: 100%;
  background: rgba(0,0,0,1);
  z-index: -1;
   @media (max-width: 64em){
    height: 500px;
   }
`;

export const centerImg = styled.img`
position: absolute;
  width: 25%;
  z-index: 1;
  transform: translate(-50%, -50%);
  top: 35%;
  left: 50%;
  @media (max-width: 64em){
    width: 200px;
   }
`;


export const textContainer = styled.div`

  position: absolute;
  z-index: 1;
  transform: translate(-50%, -50%);
  top: 70%;
  left: 50%;
  text-align: center;
  @media (max-width: 64em){
    top: 75%;
   }
`;

export const text1 = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  color: rgba(255,153,0,1);
  margin: 0px 5px;
  @media (max-width: 64em){
    font-size: 32px;
   }
`;

export const text2 = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  color: #fff;
  margin:0px 5px;
  @media (max-width: 64em){
    font-size: 32px;
    white-space: nowrap;
   }
`;


