# Portfolio Site

Personal portfolio with Digital Twin AI chat. Built with Next.js.

## Requirements

- Node.js 18+
- OpenRouter API key → [openrouter.ai](https://openrouter.ai)

## Setup

```bash
cp .env.example .env.local
# Edit .env.local and set OPENROUTER_API_KEY
npm install
```

## Run

```bash
npm run dev   # http://localhost:3000
```

The Digital Twin chat (AI assistant) requires `OPENROUTER_API_KEY`. Without it the chat returns a 500 error but the rest of the site works fine.
