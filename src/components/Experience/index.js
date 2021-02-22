import React from 'react'
import { ProjectsContainer, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH1, ProjectsH2, ProjectsP } from './ProjectsElements'
import Icon1 from '../../images/qac.jpg';
import Icon2 from '../../images/otu.png';
import Icon3 from '../../images/cibc.png';
import Icon4 from '../../images/fiverr.jpg';


const ExperienceSection = () => {
    return (
        <ProjectsContainer id="experience">
            <ProjectsH1>Aphrx's Experience</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Technical Consultant</ProjectsH2>
                    <ProjectsP>QA Consultants</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon4} />
                    <ProjectsH2>Freelance Developer</ProjectsH2>
                    <ProjectsP>Fiverr</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Research Assistant</ProjectsH2>
                    <ProjectsP>Ontario Tech University</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3} />
                    <ProjectsH2>Application Developer</ProjectsH2>
                    <ProjectsP>CIBC</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default ExperienceSection
