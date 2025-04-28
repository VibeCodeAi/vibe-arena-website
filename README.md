# Vibe Arena Website

A React website for Vibe Arena built with Vite.

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Airtable Integration

This project uses Airtable to store email waitlist submissions.

### Setup

1. Create an [Airtable](https://airtable.com/) account
2. Create a new base (database)
3. Inside the base, create a table named "Waitlist" with columns:
   - `Email` (Single line text)
   - `Signup Date` (Date)
4. Get your Airtable API key from your [account page](https://airtable.com/account)
5. Find your Base ID from the [API documentation](https://airtable.com/api)

The current implementation uses hardcoded API credentials for simplicity. The API key has limited permissions and can only submit new entries to the waitlist table.

### Security Note

The current implementation embeds the Airtable API key directly in the client-side code. This is acceptable for this specific use case because:

- The API key has limited permissions (can only add new records to a specific table)
- The waitlist data cannot be viewed or modified with this key
- The only risk is spam submissions, which could happen even with a more secure implementation

For production applications with sensitive data, consider implementing a backend server to handle API calls and keep credentials secure.

## Building for Production

To build the project for production:

```bash
npm run build
```

The build output will be in the `dist` directory, which can be deployed to any static hosting service.
