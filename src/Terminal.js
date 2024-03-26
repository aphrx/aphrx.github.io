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

  // Update the prefix here
  const prefix = 'guest@aphrx-terminal ~ % ';

  useEffect(() => {
    const focusInput = () => inputRef.current.focus();

    focusInput();
    document.addEventListener('click', focusInput);
    return () => document.removeEventListener('click', focusInput);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const executeCommand = (cmd) => {
    switch (cmd.toLowerCase()) {
      case 'help':
        return 'Available commands: help, whois, linkedin, youtube';
        case 'whois':
            return `Aphrx, AKA Amal Parameswaran is a Software Developer at Analyticsmart. I create software solutions for planogram management, utilizing Python, FastAPI, and Azure for backend development, automation, and cloud deployment. Holding a Bachelor's in Software Engineering from Ontario Tech University, I've been recognized with the NSERC USRA award. My experience extends to QA Consultants as a Technical Consultant, where I developed automated testing solutions and proof of concept applications. I hold certifications in Azure, Python for Data Science, and Machine Learning, and I'm dedicated to lifelong learning, collaboration, and networking with tech enthusiasts.`;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/amalnnath', '_blank');
            return 'Redirecting to LinkedIn...';
        case 'youtube':
            window.open('https://www.youtube.com/aphrx', '_blank');
            return 'Redirecting to Youtube...';
        case 'github':
            window.open('https://www.github.com/aphrx', '_blank');
            return 'Redirecting to GitHub...';
        default:
            return `Command not found: ${cmd}`;
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
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
