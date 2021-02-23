import React from 'react'
import { ProjectsContainer, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH1, ProjectsH2, ProjectsP } from './ProjectsElements'
import Icon1 from '../../images/project1.svg';
import Icon2 from '../../images/project2.svg';
import Icon3 from '../../images/project3.svg';


const ProjectsSection = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Aphrx's Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Among Us Bot</ProjectsH2>
                    <ProjectsP>I created an Among Us Bot using Python alongside OpenCV and Tesseract to travel to the location of the next available task and perform the necessary actions.</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Athlynx</ProjectsH2>
                    <ProjectsP>Athlynx is a fitness logging application I created due to the fact that I wasn't able to find any simple and effective apps that met my needs.</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3} />
                    <ProjectsH2>CARLA HIL</ProjectsH2>
                    <ProjectsP>This project is attempting to integrate real hardware used in cars to connect with the CARLA simulator to create a Hardware-In-The-Loop environment.</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default ProjectsSection
