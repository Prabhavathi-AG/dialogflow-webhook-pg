// index.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  // 1) Pull the email out of customData
  const customData = req.body.originalDetectIntentRequest?.payload?.customData || {};
  const email = customData.email || '';

  console.log('Webhook got email:', email);

  // 2) Craft a simple reply (you can expand this)
  const messages = [
    {
      text: {
        text: [
          email
            ? `Hi ${email}! How can I help you today?`
            : `Hello! How can I help you today?`
        ]
      }
    }
  ];

  // 3) Return both messages and set session param
  res.json({
    fulfillment_response: { messages },
    sessionInfo: {
      parameters: { email }
    }
  });
});

// Export the Express app as your function
module.exports = app;
