import styled from 'styled-components';

export const Container = styled.div`
    width: 280px;
    height: 100vh;
    box-shadow: 0 3px 30px rgba(0,0,0, 0.18);
    padding: 0 30px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    margin: 60px 0;
`
export const Title =  styled.h1`
    font-size: 25px;
    font-weight: 600;
    color: #707070;
    margin-bottom: 20px;
    width: 100%;
`
export const Select = styled.select`
    width: 100%;
    border-radius: 6px;
    border: solid 1px #F6F6F6;
    height: 50px;
    border-bottom: solid 4px #F9A624;
    padding: 0 10px;
    margin-bottom: 40px;
`