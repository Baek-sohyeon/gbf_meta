import styled from "styled-components";


export const Content = styled.div`
    height: 300px;
    background-color : rgba(106,106,106,1);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    @media (max-width: 64em){
        ${'' /* padding: 2rem 3rem; */}
        ${'' /* align-items: center; */}
    }
`
export const row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
    max-width: 600px;
    ${'' /* width: 100%; */}
    ${'' /* white-space: nowrap; */}

    
`;

export const enter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;
    ${'' /* white-space: nowrap; */}
  @media (max-width: 32em){
    flex-direction: column;
    width: 100%;
  }
    
`;


export const column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${'' /* max-width: 1500px; */}
    @media (max-width:64em){
      width: 100%;
    }

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

export const explain = styled.p`
    font-size: 14px;
    padding: 10px;
    max-width: 600px;
    text-algin: center;
`;

export const textArea = styled.textarea`
    width: 50%;
`;

export const textArea1 = styled.textarea`
    width: 100%;
    height: 300px;
`;
