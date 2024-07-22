import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [context, setContext] = useState('');
  const [objective, setObjective] = useState('');
  const [requirements, setRequirements] = useState('');
  const [examples, setExamples] = useState('');
  const [output, setOutput] = useState('');
  const [prompt, setPrompt] = useState('');

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
          <label>Context:</label>
          <textarea value={context} onChange={(e) => setContext(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Objective:</label>
          <textarea value={objective} onChange={(e) => setObjective(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Specific Requirements:</label>
          <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Examples:</label>
          <textarea value={examples} onChange={(e) => setExamples(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Expected Output:</label>
          <textarea value={output} onChange={(e) => setOutput(e.target.value)} />
        </div>
        <button type="submit">Generate Prompt</button>
      </form>
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
