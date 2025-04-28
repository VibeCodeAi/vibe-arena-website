# Airtable Integration Setup

This document outlines how to set up the Airtable integration for the email waitlist functionality.

## Setup Steps

1. Create an [Airtable](https://airtable.com/) account if you don't have one
2. Create a new base (database)
3. Inside the base, create a table named "Waitlist" (or choose your own name)
4. Add the following columns to the table:
   - `Email` (Single line text)
   - `Signup Date` (Date)

## Getting API Keys

1. Go to your [Airtable account page](https://airtable.com/account)
2. Under the API section, create a new personal access token with the following permissions:
   - `data.records:write` (for writing new records)
   - `schema.bases:read` (for reading base structure)
3. Copy the generated API key

## Base ID

To find your Base ID:
1. Go to the [Airtable API documentation](https://airtable.com/api)
2. Select your base from the list
3. In the API documentation, you'll see your base ID in the URL and in the examples (it starts with "app")

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```
NEXT_PUBLIC_AIRTABLE_API_KEY=your_airtable_api_key_here
NEXT_PUBLIC_AIRTABLE_BASE_ID=your_airtable_base_id_here
NEXT_PUBLIC_AIRTABLE_TABLE_NAME=Waitlist
```

Replace the placeholder values with your actual API key and base ID.

## Security Considerations

Note that using `NEXT_PUBLIC_` prefix means these variables will be exposed in the client-side code. For a production environment, consider:

1. Creating a server-side API endpoint to handle the Airtable communication
2. Use environment variables without the `NEXT_PUBLIC_` prefix for the server-side code
3. Implement rate limiting and other security measures

For a simple waitlist implementation as described here, the current approach is acceptable for a prototype, but should be replaced with a more secure solution before going to production. 