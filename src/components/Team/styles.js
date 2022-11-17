import styled from "styled-components";

export const Content = styled.div`
    width: 200px;
    height: 300px;
    margin-top: 100px;
    left: -50px;

    .swiper{
        width: 200px;
        height: 200px;
        overflow: visible;
        background: transparent;
    }
    .swiper-wrapper{
        left: 30%;
    }
    .swiper-slide-active{
        width: 250px;
        height: 350px;
        top:-100px;
        padding: 20px;
    }
    .swiper-3d .swiper-slide-shadow-right{
        border-radius: 22px;
        z-index: 1;
    }
    .swiper-3d .swiper-slide-shadow-left{
        border-radius: 22px;
        z-index: 1;
    }
`;

export const team = styled.img`
    width: 100%;
    height: 100%;
`;

