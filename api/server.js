const express = require('express');
const cors = require('cors');
const { Client } = require('@notionhq/client');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Notion client
const notion = new Client({
  auth: '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'
});

// This is the correct database ID from your Notion URL
const DATABASE_ID = '1c2578b095088012ac46f77c182a47cb'.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');

// POST endpoint to handle form submissions
app.post('/api/submit-form', async (req, res) => {
  try {
    const { name, company, email, message } = req.body;
    console.log('Received form submission:', { name, company, email, message });

    const response = await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name
              }
            }
          ]
        },
        Company: {
          rich_text: [
            {
              text: {
                content: company
              }
            }
          ]
        },
        Email: {
          email: email
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message || ''
              }
            }
          ]
        }
      }
    });

    console.log('Successfully created Notion page:', response.id);
    res.json({ success: true, data: response });
  } catch (error) {
    console.error('Error submitting to Notion:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      details: error.body ? JSON.stringify(error.body) : 'No additional details'
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
