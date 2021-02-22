import React from 'react'
import Progress from '../ProgressBar'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './SkillsElements'

const SkillsSection = () => {
    return (
        <>
            <InfoContainer id="skills">
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading>Aphrx's Skills</Heading>
                                <Subtitle>I have learnt and experimented with many tools, libraries and languages over the years.</Subtitle>
                                <Subtitle>Apart from the languages I have listed on the right, I am a quick learner and am able to learn how to utilize something quite quickly!</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Progress skill={"Python"} dur={"3 years"} percent={'100%'}/>
                                <Progress skill={"Java"} dur={"3 years"} percent={'100%'}/>
                                <Progress skill={"JavaScript"} dur={"2 years"} percent={'80%'}/>
                                <Progress skill={"Flutter"} dur={"2 years"} percent={'80%'}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default SkillsSection
