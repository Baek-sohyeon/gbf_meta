import styled from "styled-components";


export const Content = styled.div`
    background-color : rgba(244,246,247,1);
    padding: 0rem 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    @media (max-width: 64em){
        padding: 2rem 3rem;
        align-items: center;
    }
`
export const row = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-around;
    margin-bottom: 20px

    
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
    align-items: start;
    margin-top: 30px;
`;

export const text1 = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: rgba(106,106,106,1);
    margin: 2px;
    white-space: nowrap;
`;

export const text2 = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: rgba(255,153,0,1);
    margin: 2px;
    white-space: nowrap;

`;