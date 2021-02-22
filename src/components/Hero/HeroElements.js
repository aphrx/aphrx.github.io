import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    position: relative;
    z-index: 1;
`;

export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    display: grid;
    grid-auto-columns: 1fr 1fr;
    flex-direction: column;
    align-items: center;
`;

export const HeroRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${`'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${`'col1 col1' 'col2 col2'`};
    }
`;

export const HeroWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: left;

    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        text-align: center;
        font-size: 32px;
    }

`;

export const HeroP = styled.p`
    margin-top: 0px;
    color: #fff;
    font-size: 24px;
    text-align:left;

    @media screen and (max-width: 768px){
        
        text-align: center;
        font-size: 22px;
    }

    @media screen and (max-width: 480px){
        text-align: center;
        font-size: 18px;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
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