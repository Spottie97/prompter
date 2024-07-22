const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
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
