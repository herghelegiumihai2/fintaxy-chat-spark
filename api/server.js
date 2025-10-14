const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// n8n Webhook endpoint
const WEBHOOK_URL = 'https://dev.n8n.fintaxy.com/webhook/notion-landing-leads';

// POST endpoint to handle form submissions
app.post('/api/submit-form', async (req, res) => {
  try {
    const { name, company, email, phone, message, source } = req.body;
    console.log('Received form submission:', { name, company, email, phone, message, source });

    // Send data to n8n webhook
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name || '',
        company: company || '',
        email: email || '',
        phone: phone || '',
        message: message || '',
        source: source || 'waitlist_modal'
      })
    });

    if (!response.ok) {
      throw new Error(`Webhook request failed with status ${response.status}`);
    }

    const responseData = await response.json();

    console.log('Successfully sent to n8n webhook:', responseData);
    res.json({ success: true, data: responseData });
  } catch (error) {
    console.error('Error submitting to n8n webhook:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      details: 'Failed to submit form data'
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
