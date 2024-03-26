import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css'; // Ensure this points to your CSS file

const Terminal = () => {
  const [input, setInput] = useState('');
  const asciiArt = `
              _               
             | |              
   __ _ _ __ | |__  _ ____  __
  / _\` | '_ \\| '_ \\| '__\\ \\/ /
 | (_| | |_) | | | | |   >  < 
  \\__,_| .__/|_| |_|_|  /_/\\_\\
       | |                    
       |_| 

`;
  const welcomeMessage = `Welcome to Aphrx Terminal. Type "help" for a list of commands.`;
  const [history, setHistory] = useState([asciiArt, welcomeMessage]);
  const inputRef = useRef(null);
  const endOfMessagesRef = useRef(null);

  // Update the prefix here
  const prefix = 'guest@aphrx-terminal ~ % ';

  useEffect(() => {
    const focusInput = () => inputRef.current.focus();
    focusInput();
    document.addEventListener('click', focusInput);
    return () => document.removeEventListener('click', focusInput);
  }, []);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleInputChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  const executeCommand = (cmd) => {
    switch (cmd.toLowerCase()) {
      case 'help':
        return `
Available commands:

Aphrx Terminal
    whois           Display developer summary.
    education       Display developer education.
    experience      Display developer experience.

External Links
    linkedin        Redirect to LinkedIn.
    github          Redirect to GitHub.
    youtube         Redirect to YouTube.

General
    help            List available commands.
    clear           Clear the terminal screen.
      `;
      case 'whois':
        return `My name is Amal Parameswaran AKA Aphrx. I'm a Software Developer at Analyticsmart who also creates YouTube videos in his free time. I create software solutions for planogram management, utilizing Python, FastAPI, and Azure for backend development, automation, and cloud deployment. Holding a Bachelor's in Software Engineering from Ontario Tech University, I've been recognized with the NSERC USRA award. My experience extends to QA Consultants as a Technical Consultant, where I developed automated testing solutions and proof of concept applications. I hold certifications in Azure, Python for Data Science, and Machine Learning, and I'm dedicated to lifelong learning, collaboration, and networking with tech enthusiasts.`;
      case 'education':
        return `
Bachelors of Software Engineering
  Duration: Sept 2015 - April 2020
  Institution: Ontario Tech University
  Achievements:
    - President’s List (Fall 2015)
    - Dean’s List (Winter 2016)
    - NSERC USRA (Summer 2019)
    - Highest Distinction (Spring 2020)`
    case 'experience':
        return `
Software Developer, July 2021 - Present
Analyticsmart
- Engineered and upheld a resilient backend in Python and FastAPI for the client-facing application, aiding in planogram management.
- Automated data processing scripts and facilitated deployment into Azure to enhance process efficiency, minimize human error, and streamline operations.

Technical Consultant, May 2020 - June 2021
QA Consultants
- Developed an automotive testing solution to automate execution of test cases in order to minimize manual testing efforts.
- Generated multiple proof of concept applications for various business clients to assist with their testing needs.

Research Assistant, May 2019 - April 2020
Ontario Tech University
- Researched CAN Bus and other protocols with the university to gain an understanding of how vehicles communicate with a variety of components.
- Developed Java tools to assist the university with injecting and read CAN messages through the CAN Bus to read and manipulate automotive functionality.

Application Developer, Jan 2018 - Dec 2018
CIBC
- Implemented and enhanced updates for the bank's internal Java mortgage application to optimize functionality and enhance user experience.
- Collaborated with the bank to automate incident and defect tracking systems, resulting in improved efficiency and streamlined communication within the team.
`
    case 'linkedin':
        window.open('https://www.linkedin.com/in/amalnnath', '_blank');
        return 'Redirecting to LinkedIn...';
      case 'youtube':
        window.open('https://www.youtube.com/aphrx', '_blank');
        return 'Redirecting to Youtube...';
      case 'github':
        window.open('https://www.github.com/aphrx', '_blank');
        return 'Redirecting to GitHub...';
        case 'skills':
      const skills = {
        'Python': 6,
        'SQL': 6,
        'JavaScript': 5,
        'Flutter': 5,
        'Java': 4,
        'React': 4,
        // Add more skills as needed
      };

      // Calculate the maximum length of the skill names
      const maxSkillNameLength = Math.max(...Object.keys(skills).map(skill => skill.length));

      const generateProgressBar = (skill, years) => {
        const maxYears = 10;
        const symbolPerYear = '█';
        const progressBarLength = years < maxYears ? years : maxYears;
        let progressBar = skill.padEnd(maxSkillNameLength) + ': ';

        for (let i = 0; i < progressBarLength; i++) {
          progressBar += symbolPerYear;
        }
        progressBar = progressBar.padEnd(maxSkillNameLength + maxYears + 2, ' '); // +2 for ': ' after skill name
        return progressBar + ` ${years} years`;
      };

      let skillsOutput = '';
      Object.keys(skills).forEach(skill => {
        skillsOutput += `${generateProgressBar(skill, skills[skill])}\n`;
      });

      return skillsOutput;
      case 'clear':
        setHistory([]);
        return '';
      default:
        return '';
    }
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const output = executeCommand(input);
    setHistory((prevHistory) => [...prevHistory, `${prefix}${input}`, output]);
    setInput('');
  };

  return (
    <div className="terminal">
      <ul className="history">
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <div ref={endOfMessagesRef}></div>
      </ul>
      <div className="input-line">
        <span className="prefix">{prefix}</span>
        <form onSubmit={handleCommandSubmit} style={{ display: 'inline' }}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            className="terminal-input"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
