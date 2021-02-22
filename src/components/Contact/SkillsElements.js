import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    height: calc(100vh - 120px);
    background: #121212;
    padding-top: 5%;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 90%;
    width: 85%;
    
    padding: 0 24px;
    background: #FF5252;
    border-radius:10px;

    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${`'col2 col1'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    text-align: center;
    line-height: 1.1;
    font-weight: 600;
    color: '#frf8fa';

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    margin-bottom: 35px;
    text-align: justify;
    font-size: 18px;
    line-height: 24px;
    color:  '#fff';
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    height: 60px;
    padding: 10px;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const LinkRow = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CoverImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;