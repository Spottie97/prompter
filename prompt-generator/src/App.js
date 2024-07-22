import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Switch, Typography, AppBar, Toolbar } from '@mui/material';
import PromptForm from './PromptForm';
import ScrollToTopButton from './ScrollToTopButton';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: 'Open Sans, Arial',
    },
  });

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Prompt Generator
          </Typography>
          <Typography variant="body1">Dark Mode</Typography>
          <Switch checked={darkMode} onChange={handleToggle} />
        </Toolbar>
      </AppBar>
      <Container>
        <PromptForm />
      </Container>
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
