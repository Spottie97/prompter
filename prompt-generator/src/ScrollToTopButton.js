import React from 'react';
import { Button, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={scrollToTop}
        startIcon={<ArrowUpwardIcon />}
        sx={{ borderRadius: 2 }}
      >
        Back to Top
      </Button>
    </Box>
  );
};

export default ScrollToTopButton;
