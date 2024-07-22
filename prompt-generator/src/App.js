import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Typography } from '@mui/material';
import PromptForm from './PromptForm';
import ScrollToTopButton from './ScrollToTopButton';
import './App.css';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#278ff4', // Color from the gradient
      },
      secondary: {
        main: '#003cde', // Color from the gradient
      },
      background: {
        default: 'transparent', // Transparent to show the gradient background
        paper: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
      },
      text: {
        primary: '#000000',
      },
    },
    typography: {
      fontFamily: 'Open Sans, Arial',
    },
    shape: {
      borderRadius: 16,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <PromptForm />
      </Container>
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
