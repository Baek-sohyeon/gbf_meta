import styled from "styled-components";

export const Content = styled.div`
    background-color : rgba(28,28,28,1);
    padding: 3rem 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    @media (max-width: 64em){
    padding: 2rem 3rem;
    flex-direction: column;

    }
    @media (max-width: 18em){
        padding: 1rem 2rem;

    }
`
export const Container = styled.div`
    width: 100%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255,153,0,1);
    @media (max-width: 18em){
        flex-direction: column;
    }
`
export const row = styled.div`
    display: flex;
    flex-direction: row;
`
export const column = styled.div`
    display: flex;
    flex-direction: column;
`
export const companyName = styled.div`
    color: white;
    justify-content: flex-end;
    font-size: 10px;
    padding: 10px 10px 0px 10px;
`
export const companyLoc = styled.p`
    color: rgba(106,106,106,1);
    font-size: 10px;
    padding: 10px;
    white-space: nowrap;

`
export const company = styled.div`
    
`

export const Logo =  styled.div`
    font-size: 28px;
    font-weight: bold;
    color: white;
`
export const copyright = styled.p`
    color: rgba(106,106,106,1);
    font-size: 7px;
    padding-top: 50px
`