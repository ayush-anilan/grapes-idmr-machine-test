# Grapes IDMR Machine Test

This is a React + Vite machine test project with API integration for:
- pre-login hospital lookup by phone number
- user login
- token storage on successful authentication
- navigation to dashboard after login

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=/api
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser:

```text
http://localhost:5173
```

## API and CORS Notes

- Frontend requests use `/api` as the base URL.
- Vite proxy forwards `/api` requests to the backend service in development.
- This avoids browser CORS issues during local development.


