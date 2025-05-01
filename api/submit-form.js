// import { Client } from '@notionhq/client';

const notionhq = require('@notionhq/client');
const { Client } = notionhq;

export const runtime = 'edge';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY || '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'
});

// Database ID
const DATABASE_ID = '1c2578b095088012ac46f77c182a47cb';

export async function POST(request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }

  try {
    const body = await request.json();
    const { name, company, email, message } = body;

    const response = await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name || ''
              }
            }
          ]
        },
        Company: {
          rich_text: [
            {
              text: {
                content: company || ''
              }
            }
          ]
        },
        Email: {
          email: email || ''
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

    return new Response(JSON.stringify({ success: true, data: response }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  } catch (error) {
    console.error('Error submitting to Notion:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        details: error.body ? JSON.stringify(error.body) : 'No additional details'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    );
  }
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
} 