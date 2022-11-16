import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-cards";

export const Content = styled.div`
    background-color : rgba(28,28,28,1);
    padding: 3rem 12rem;
    display: flex;
    flex-direction: row;
    @media (max-width: 64em){
    flex-direction: column;
    padding: 2rem 3rem;
    align-items: center;
    }
`

export const ContentLeft = styled.div`
 

`;

export const ContentRight = styled.div`
`;

export const text1 = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
  color: rgba(255,153,0,1);
  margin: 0px 5px;
  white-space: nowrap;
`;

export const textTop = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: rgba(106,106,106,1);
  margin: 0px 5px;
  white-space: nowrap;
`;

export const explain = styled.p`
    color: rgba(255,255,255,1);
    font-size: 13px;
    line-height: 20px;
`;

export const row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


export const buttonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px
`;
