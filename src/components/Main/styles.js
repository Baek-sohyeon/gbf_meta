import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-cards";

export const Content = styled.div`
    background-color : rgba(244,246,247,1);
    padding: 6rem 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 64em){
        flex-direction: column;
        padding: 2rem 3rem;
        align-items: center;
    }
`
export const row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 32em){
        flex-direction: column;
        margin-bottom: 10px;
    }

    
`;

export const enter = styled.div`
    display: flex;
    flex-direction: column;
    width: '90%';

`;


export const column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

`;

export const text1 = styled.p`
    font-size: 28px;
    font-weight: bold;
    color:  rgba(28,28,28,1);
    margin: 2px;
    white-space: nowrap;
   @media (max-width: 64em){
        font-size: 24px;
    }
    @media (max-width: 32em){
        font-size: 17px;
    }
    @media (max-width: 18em){
        font-size: 12px;
    }
`;

export const text2 = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: rgba(255,153,0,1);
    margin: 2px;
    white-space: nowrap;
   @media (max-width: 64em){
        font-size: 26px;
    }
    @media (max-width: 32em){
        font-size: 22px;
    }
    @media (max-width: 18em){
        font-size: 12px;
    }

`;

export const text3 = styled.p`
    font-size: 18px;
    color:  rgba(28,28,28,1);
    margin: 2px;
    text-align: center;
    white-space: nowrap;
    @media (max-width: 64em){
        font-size: 14px;
    }
    @media (max-width: 32em){
        font-size: 12px;
    }
    @media (max-width: 18em){
        font-size: 4px;
        white-space: break-spaces;
    }
`;


export const Video = styled.div`
  position:relative; 
  height:0;
  width:100%;
  padding-bottom:56.25%; 
`;

export const VideoWrap = styled.div`
    width: 70vw;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const TextWrap = styled.div`
   margin-bottom: 20px;
`;