import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-cards";

export const Content = styled.div`
    width: 100%;
    margin-top: 30px;
    border-radius: 22px;
    background-color : white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

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
    flex-direction: ;
    @media (max-width: 64em){
        flex-direction: column;
    }
`;


export const column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 12px;

`;

export const content = styled.p`
    font-size: 12px;
    font-weight: 400;
    color:  rgba(28,28,28,1);
    margin: 2px;
    width: 200px;
    text-align: center;
    @media (max-width: 32em){
        width: 150px;
    }
     @media (max-width: 18em){
        font-size: 10px;
        width: 100px;
    }

`;

export const title = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: rgba(255,153,0,1);
    margin: 12px 0px 4px;
    white-space: nowrap;
    @media (max-width: 32em){
        font-size: 14px;
    }
    @media (max-width: 18em){
        font-size: 12px;
    }

`;

export const prize = styled.img`
width: 150px;
 @media (max-width: 18em){
    width: 100px;
}

    ${'' /* font-size: 28px;
    font-weight: bold;
    color: rgba(255,153,0,1);
    margin: 2px;
    white-space: nowrap; */}

`;
