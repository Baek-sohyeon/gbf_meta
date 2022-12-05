import styled from "styled-components";


export const Content = styled.div`
    background-color : rgba(244,246,247,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    ${'' /* @media (max-width: 64em){
        padding: 2rem 3rem;
        align-items: center;
    } */}
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

`;

export const client = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 160px;
    @media (max-width: 18em){
        margin-top :40px;
  }
`;

export const text1 = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: rgba(106,106,106,1);
    margin: 2px;
    white-space: nowrap;
    @media (max-width: 18em){
    font-size:20px;
  }
`;

export const text2 = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: rgba(255,153,0,1);
    margin: 2px;
    white-space: nowrap;
    @media (max-width: 18em){
    font-size:20px;
  }
`;