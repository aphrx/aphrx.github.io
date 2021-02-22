import React from 'react';
import { InfoContainer, CoverImg, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, LinkRow, Heading, Subtitle, ImgWrap, Img } from './SkillsElements';
import github from '../../images/github.png';
import youtube from '../../images/youtube.png';
import linkedin from '../../images/linkedin.png';
import contact from '../../images/contact.svg';

const ContactSection = () => {
    return (
        <>
            <InfoContainer id="contact">
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading>Contact Aphrx</Heading>
                                <Subtitle>If you would like to get in contact with Aphrx, feel free to utilize the social media links that I have provided below or send a personal email!</Subtitle>
                                <Subtitle></Subtitle>
                                <LinkRow>
                                    <a href="https://github.com/aphrx"><Img src={github}></Img></a>
                                    <a href="https://youtube.com/aphrx"><Img src={youtube}></Img></a>
                                    <a href="https://www.linkedin.com/in/amalnnath/"><Img src={linkedin}></Img></a>
                                </LinkRow>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <CoverImg src={contact} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default ContactSection
