import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-cards";

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5rem 5rem 5rem;
    box-sizing: border-box;

    @media (max-width: 64em){
        flex-direction: column;
        padding: 10% 7%;
        align-items: center;
    }
    .swiper-wrapper {
        width: 100% !important;
        @media (max-width: 64em){
            width: 100% !important;
        }
    }
    .swiper {
        width: 90%;
        height: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    .swiper-slide {
        height: 100%;
        width: 50% !important;

        text-align: center;
        font-size: 18px;
    }
    iframe {
        aspect-ratio: 16/9
    }
`

export const row = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;

    
`;

export const enter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    ${'' /* margin: 4%; */}
    @media (max-width: 64em){
        flex-direction: column;
    }
`;


export const column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;

`;


export const text1 = styled.p`
    font-size: 30px;
    font-weight: bold;
    color:  rgba(28,28,28,1);
    margin: 2px;
    white-space: nowrap;
   @media (max-width: 64em){
        font-size: 26px;
    }
    @media (max-width: 32em){
        font-size: 22px;
    }
    @media (max-width: 18em){
        font-size: 17px;
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
        font-size: 17px;
    }

`;

export const text3 = styled.p`
    text-align: center;
    font-size: 14px;
    color:  rgba(28,28,28,1);
    margin-top: 10px;
    text-align: center;
    font-weight: 500;
    ${'' /* white-space: nowrap; */}
    @media (max-width: 64em){
        font-size: 14px;
    }
    @media (max-width: 32em){
        font-size: 10px;
    }

`;

export const TextWrap = styled.div`
   margin-bottom: 20px;
   align-self: center;
`;

export const YoutubeWrap = styled.div`
${'' /* padding: 30px; */}
    width: 90%;
    box-sizing: border-box;
   margin: 10px;
   aspect-ratio: 16 / 9;    
`;

export const text4 = styled.p`
    font-size: 18px;
    color:  rgba(28,28,28,1);
    margin: 2px;
    text-align: center;
    white-space: nowrap;
    @media (max-width: 32em){
        font-size: 15px;
    }
    @media (max-width: 18em){
        font-size: 12px;
        white-space: break-spaces;
    }
`;
