import styled, { keyframes } from 'styled-components';

export const ProgressContainer = styled.div`
    margin: 20px auto;
    width: 300px;
    text-align: center;
    position: relative;
`;

const progress = keyframes`
    0% {
        width: 0%;
        background: #f9bcca;
    }
    ${props => props.percent}% {
        width:  ${props => props.percent};
        background: #FF5252;
    }

`;

export const ProgressMoved = styled.div`
    border-radius: 30px;
    background-color: #FF5252;
    width: ${props => props.percent};
    animation: ${progress} 10s;
    
`;


export const ProgressBar = styled.div` 
    height: 18px;
    border-radius: 30px;
    transition: .4s linear;
`;

export const ProgressName = styled.p`
    color: #fff;
    text-align: left;
`;

export const ProgressDir = styled.p`
    color: #fff;
    text-align: right;
`;

export const ProgressStats = styled.p`
    color: #fff;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const ProgressLoader = styled.div`
    position: absolute;
    background: #121212;
`;