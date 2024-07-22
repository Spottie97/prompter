import React, { useState, useRef } from 'react';
import {
  Container, TextField, Button, Typography, IconButton, Tooltip, Box, Paper
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCopy } from '@fortawesome/free-solid-svg-icons';

const PromptForm = () => {
  const [context, setContext] = useState('');
  const [objective, setObjective] = useState('');
  const [requirements, setRequirements] = useState('');
  const [examples, setExamples] = useState('');
  const [output, setOutput] = useState('');
  const [prompt, setPrompt] = useState('');
  const [tooltip, setTooltip] = useState('');
  const outputRef = useRef(null);

  const handleTooltip = (description, example) => {
    if (tooltip.description === description) {
      setTooltip('');
    } else {
      setTooltip({ description, example });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedPrompt = `
      Context:
      ${context}

      Objective:
      ${objective}

      Specific Requirements:
      ${requirements}

      Examples:
      ${examples}

      Expected Output:
      ${output}
    `;
    setPrompt(generatedPrompt);
    setTimeout(() => {
      if (outputRef.current) {
        outputRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5, borderRadius: 16 }}>
        <Typography variant="h4" gutterBottom style={{ color: '#003cde' }}>
          Prompt Generator
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Context"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              InputProps={{
                style: { backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16 },
                endAdornment: (
                  <Tooltip
                    title={
                      <div>
                        <p><strong>Description:</strong> Background information about the topic.</p>
                        <p><strong>Example:</strong> "I am working on a React application and need help with state management."</p>
                      </div>
                    }
                    arrow
                  >
                    <IconButton tabIndex={-1}>
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </IconButton>
                  </Tooltip>
                ),
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Objective"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              InputProps={{
                style: { backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16 },
                endAdornment: (
                  <Tooltip
                    title={
                      <div>
                        <p><strong>Description:</strong> What you want to achieve.</p>
                        <p><strong>Example:</strong> "I want to understand how to use Redux for state management in my React application."</p>
                      </div>
                    }
                    arrow
                  >
                    <IconButton tabIndex={-1}>
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </IconButton>
                  </Tooltip>
                ),
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Specific Requirements"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              InputProps={{
                style: { backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16 },
                endAdornment: (
                  <Tooltip
                    title={
                      <div>
                        <p><strong>Description:</strong> Detailed requirements or constraints.</p>
                        <p><strong>Example:</strong> "The solution should be scalable and work with React hooks."</p>
                      </div>
                    }
                    arrow
                  >
                    <IconButton tabIndex={-1}>
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </IconButton>
                  </Tooltip>
                ),
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Examples"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={examples}
              onChange={(e) => setExamples(e.target.value)}
              InputProps={{
                style: { backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16 },
                endAdornment: (
                  <Tooltip
                    title={
                      <div>
                        <p><strong>Description:</strong> Any examples or templates to follow.</p>
                        <p><strong>Example:</strong> "An example of a Redux setup with React hooks would be helpful."</p>
                      </div>
                    }
                    arrow
                  >
                    <IconButton tabIndex={-1}>
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </IconButton>
                  </Tooltip>
                ),
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Expected Output"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              InputProps={{
                style: { backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16 },
                endAdornment: (
                  <Tooltip
                    title={
                      <div>
                        <p><strong>Description:</strong> Description of the desired outcome.</p>
                        <p><strong>Example:</strong> "I expect a step-by-step guide on setting up Redux with React hooks."</p>
                      </div>
                    }
                    arrow
                  >
                    <IconButton tabIndex={-1}>
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </IconButton>
                  </Tooltip>
                ),
              }}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ borderRadius: 16 }}>
            Generate Prompt
          </Button>
        </form>
        {prompt && (
          <Box mt={4} ref={outputRef}>
            <Typography variant="h5" gutterBottom>
              Generated Prompt:
            </Typography>
            <Paper elevation={1} sx={{ padding: 2, position: 'relative', borderRadius: 16 }}>
              <pre>{prompt}</pre>
              <Tooltip title="Copy to clipboard" arrow>
                <IconButton
                  onClick={handleCopy}
                  sx={{ position: 'absolute', top: 10, right: 10 }}
                  tabIndex={-1}
                >
                  <FontAwesomeIcon icon={faCopy} />
                </IconButton>
              </Tooltip>
            </Paper>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default PromptForm;
