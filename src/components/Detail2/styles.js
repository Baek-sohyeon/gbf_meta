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
    @media (max-width: 18em){
    padding: 1rem 1rem;
    }
`

export const ContentLeft = styled.div`
 

`;

export const ContentRight = styled.div`
    @media (max-width: 18em){
    width: 230px;
    }
`;

export const text1 = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: rgba(255,153,0,1);
  margin: 0px 5px;
  white-space: nowrap;
  @media (max-width: 18em){
    font-size:2rem;
}

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
    margin-right: 50px;
    @media (max-width: 64em){
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const gif = styled.img`
    display: flex;
    flex-direction: row;
    width: 500px;
     @media (max-width: 64em){
        width: 100%;
    }
`;

export const buttonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px
`;
