import styled from "styled-components";

export const Content = styled.div`
    width: 200px;
    ${'' /* height: 300px; */}
    margin-top: 100px;
    left: -50px;
    ${'' /* @media (max-width: 18em){
        width: 100px;
        height: 200px;
    } */}

    .swiper{
        width: 200px;
        height: 200px;
        overflow: visible;
        background: transparent;
        ${'' /* @media (max-width: 18em){
            width: 100px;
            height: 100px;
        } */}
    }
    .swiper-wrapper{
        left:30%;
        @media (max-width: 18em){
            left: 10%;
        }

    }


    .swiper-slide-active{
        width: 250px;
        height: 350px;
        top:-100px;
        margin: 20px; 
        border-radius: 22px;
        box-shadow: 0 1px 4px rgb(0 0 0 / 30%), 0 0 40px rgb(0 0 0 / 10%) inset;
        @media (max-width: 18em){
            width: 200px;
            height: 250px;
            margin: 20px;
        }
    }
    .swiper-slide-active:before,
    .swiper-slide-active:after{
        position:absolute;
        bottom: 23px;
        left: 10px;
        width: 80%;
        height: 20%;
        box-shadow: 0 15px 10px -10px rgb(0 0 0 / 50%);
        right: 10px;
        left: auto;
    }
    .swiper-3d .swiper-slide-shadow-right{
        border-radius: 22px;
        z-index: 1;
    }
    .swiper-3d .swiper-slide-shadow-left{
        border-radius: 22px;
        z-index: 0;
        ${'' /* box-shadow: -25px -4px 4px 0 rgba(0,0,0,0.75); */}
        ${'' /* transform: skewX(60deg); */}
    }
    
`;

export const team = styled.img`
    width: 100%;
    height: 100%;
`;

