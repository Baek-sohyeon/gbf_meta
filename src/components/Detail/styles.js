import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-cards";

export const Content = styled.div`
    background-color : rgba(28,28,28,1);
    padding: 3rem 12rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    .swiper{
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        background: transparent
    }
    .swiper-slide-shadow{
        background: transparent;
    }
    .swiper-wrapper {
        text-align: left;
    }
    @media (max-width: 64em){
        flex-direction: column;
        padding: 2rem 3rem;
        align-items: center;
    }


`

export const ContentLeft = styled.div`
    width: 100px;
    @media (max-width: 18em){
        ${'' /* width: 14em; */}
    }
    ${'' /* width: 50%; */}
    ${'' /* margin-right: 20px */}

`;

export const ContentRight = styled.div`
    ${'' /* width: 50%; */}
`;

export const Mark = styled.p`
    font-size: 22px;
    font-weight: bold;
    color: rgba(255,153,0,1);
    margin: 2px;
    white-space: nowrap;
`;

export const Title = styled.p`
    font-size: 22px;
    font-weight: bold;
    color: rgba(255,255,255,1);
    margin: 2px;
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
    justify-content: center;
    width: 200px;
    margin: 0px 100px 40px;
    @media (max-width: 64em){
        width: 150px;
    }

`;

export const RoundImage = styled.img`
    width: 100%;
`;

export const buttonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px

`;
