const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Define allowed origins
const allowedOrigins = ['https://prompt-generator-3t926nad8-spottie97s-projects.vercel.app'];

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));
  
  app.use(bodyParser.json());
  
  app.post('/generatePrompt', (req, res) => {
    const { context, objective, requirements, examples, output } = req.body;
  
    const prompt = `
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
  
    res.json({ prompt });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });