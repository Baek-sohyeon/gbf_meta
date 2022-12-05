import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-cards";

export const Content = styled.div`
    height: 500px;
    background-color : rgba(244,246,247,1);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 2rem 3rem;

    @media (max-width: 64em){
        ${'' /* padding: 2rem 3rem; */}
        ${'' /* align-items: center; */}
    }
`
export const row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    ${'' /* white-space: nowrap; */}

    
`;

export const enter = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 64em){
        flex-direction: column;
    }
`;


export const column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const text1 = styled.p`
    font-size: 28px;
    font-weight: bold;
    color:  rgba(28,28,28,1);
    margin: 2px;
    white-space: nowrap;
    @media (max-width: 18em){
        font-size: 22px;
   }
`;

export const text2 = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: rgba(255,153,0,1);
    margin: 2px;
    white-space: nowrap;
    @media (max-width: 18em){
        font-size: 22px;
   }

`;
