import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, IconButton, Tooltip, Box, Paper
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const PromptForm = () => {
  const [context, setContext] = useState('');
  const [objective, setObjective] = useState('');
  const [requirements, setRequirements] = useState('');
  const [examples, setExamples] = useState('');
  const [output, setOutput] = useState('');
  const [prompt, setPrompt] = useState('');
  const [tooltip, setTooltip] = useState('');

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
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
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
                    <IconButton>
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
                    <IconButton>
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
                    <IconButton>
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
                    <IconButton>
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
                    <IconButton>
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </IconButton>
                  </Tooltip>
                ),
              }}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Generate Prompt
          </Button>
        </form>
        {prompt && (
          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              Generated Prompt:
            </Typography>
            <Paper elevation={1} sx={{ padding: 2 }}>
              <pre>{prompt}</pre>
            </Paper>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default PromptForm;
