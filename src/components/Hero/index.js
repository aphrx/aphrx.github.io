import React from 'react';
import { HeroRow, HeroWrapper, Column1, Column2, ImgWrap, Img, HeroContainer, HeroBg, HeroContent, HeroH1, HeroP } from './HeroElements';
import portrait from '../../images/memoji.png';
import Typical from 'react-typical';


const Hero = () => {
    return (
        <HeroContainer>
            <HeroWrapper>
                <HeroRow>
            <Column1>
                <HeroH1>Hi, I'm Aphrx</HeroH1>
                <HeroP>
                    <Typical
                        loop={Infinity}
                        wrapper="p"
                        steps={[
                            'I like to code!',
                            2000,
                            'I like to make YouTube videos!',
                            2000,
                            'I like to work out!',
                            2000,
                        ]} />

                </HeroP>
            </Column1>
            <Column2>
            <ImgWrap>
                <Img src={portrait} alt="Memoji"/>
                </ImgWrap>
            </Column2>
            </HeroRow>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero
