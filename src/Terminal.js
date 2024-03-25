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
            return `As a Software Developer at Analyticsmart, I engineer innovative software solutions that aid in planogram management for the client-facing application. I leverage my skills in Python, FastAPI, and Azure to build and maintain a resilient backend, automate data processing scripts, and facilitate deployment into the cloud. I have a Bachelor's Degree in Software Engineering from Ontario Tech University, where I achieved highest distinctions and received the NSERC USRA award for exploring automated testing of embedded real-time operating systems.\n\nI have also gained valuable experience as a Technical Consultant at QA Consultants, where I developed an automotive testing solution to automate execution of test cases and minimize manual testing efforts. Additionally, I generated multiple proof of concept applications for various business clients to assist with their testing needs. I am passionate about continuous learning and embracing new technologies, and I have obtained certifications in Azure Fundamentals, Python for Data Science, and Machine Learning with Python from Microsoft and IBM. I thrive on collaboration and am always looking to connect with tech enthusiasts and professionals.`;
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
