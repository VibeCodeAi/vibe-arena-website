/**
 * Service to handle email submissions to Airtable
 */
import Airtable from 'airtable';

export const submitEmail = async (email) => {
  try {
    // API key and base ID hardcoded for simplicity. LOL.
    // Basically we dont care about security here. You can only submit emails to the waitlist (permissions).
    // Noone can see the emails, and noone can see the table, only thing they can do is spam the submissions - which they can technically still do 
    // even if it was done in a way that is secure, with a proxy backend or sth. So, we just dont care.
    const AIRTABLE_API_KEY = 'pat2qzsRnSvaTeVN2.2ae3ebe10c27a304d9be09839051ebd58909d8b20e5186f4636ce01ca224abaa';
    const AIRTABLE_BASE_ID = 'app14Uv7ibP7Plyfw';
    const AIRTABLE_TABLE_NAME = 'Waitlist';
  
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: AIRTABLE_API_KEY
    });
    const base = Airtable.base(AIRTABLE_BASE_ID);
    
    // Create a record in the table
    const result = await base(AIRTABLE_TABLE_NAME).create({
      Email: email,
      'Signup Date': new Date().toISOString()
    });
    
    return result;
  } catch (error) {
    console.error('Error submitting email:', error);
    throw error;
  }
}; 