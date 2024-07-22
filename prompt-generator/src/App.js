import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [context, setContext] = useState('');
  const [objective, setObjective] = useState('');
  const [requirements, setRequirements] = useState('');
  const [examples, setExamples] = useState('');
  const [output, setOutput] = useState('');
  const [prompt, setPrompt] = useState('');
  const [tooltip, setTooltip] = useState('');

  const handleTooltip = (description) => {
    setTooltip(description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/generatePrompt', {
      context,
      objective,
      requirements,
      examples,
      output
    });
    setPrompt(response.data.prompt);
  };

  return (
    <div className="App">
      <h1>Prompt Generator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Context:
            <FontAwesomeIcon 
              icon={faQuestionCircle} 
              onClick={() => handleTooltip('Background information about the topic. Example: "I am working on a React application and need help with state management."')} 
              className="tooltip-icon" 
            />
          </label>
          <textarea value={context} onChange={(e) => setContext(e.target.value)} />
        </div>
        <div className="form-group">
          <label>
            Objective:
            <FontAwesomeIcon 
              icon={faQuestionCircle} 
              onClick={() => handleTooltip('What you want to achieve. Example: "I want to understand how to use Redux for state management in my React application."')} 
              className="tooltip-icon" 
            />
          </label>
          <textarea value={objective} onChange={(e) => setObjective(e.target.value)} />
        </div>
        <div className="form-group">
          <label>
            Specific Requirements:
            <FontAwesomeIcon 
              icon={faQuestionCircle} 
              onClick={() => handleTooltip('Detailed requirements or constraints. Example: "The solution should be scalable and work with React hooks."')} 
              className="tooltip-icon" 
            />
          </label>
          <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} />
        </div>
        <div className="form-group">
          <label>
            Examples:
            <FontAwesomeIcon 
              icon={faQuestionCircle} 
              onClick={() => handleTooltip('Any examples or templates to follow. Example: "An example of a Redux setup with React hooks would be helpful."')} 
              className="tooltip-icon" 
            />
          </label>
          <textarea value={examples} onChange={(e) => setExamples(e.target.value)} />
        </div>
        <div className="form-group">
          <label>
            Expected Output:
            <FontAwesomeIcon 
              icon={faQuestionCircle} 
              onClick={() => handleTooltip('Description of the desired outcome. Example: "I expect a step-by-step guide on setting up Redux with React hooks."')} 
              className="tooltip-icon" 
            />
          </label>
          <textarea value={output} onChange={(e) => setOutput(e.target.value)} />
        </div>
        <button type="submit">Generate Prompt</button>
      </form>
      {tooltip && (
        <div className="tooltip">
          <p>{tooltip}</p>
        </div>
      )}
      {prompt && (
        <div className="output">
          <h2>Generated Prompt:</h2>
          <pre>{prompt}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
