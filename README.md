# RoadBrief

RoadBrief is a browser-first driving flight-plan demo: a SimBrief-inspired operational route planner for drivers.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy on GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that builds the app as a static Next.js export and publishes the `out/` directory to GitHub Pages.

### One-time GitHub setup

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. In **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main`/`master`, or run **Actions → Deploy RoadBrief to GitHub Pages → Run workflow**.

The site will be available at:

```text
https://<your-github-username>.github.io/<repository-name>/
```

For this repository name, the expected path is usually:

```text
https://<your-github-username>.github.io/RoadBrif/
```

## Demo mode and APIs

The current app works as a static demo on GitHub Pages. It uses mock/demo route, weather, wind, fuel, hazard, elevation and PDF data in the browser.

Real provider integrations that require secret API keys should not run directly in GitHub Pages because GitHub Pages is static and public. Use a server deployment such as Vercel, Render, Railway, Fly.io or a Next.js server/API route backend for:

- PostgreSQL and Prisma runtime operations
- private routing/weather/fuel API keys
- authenticated users
- server-side PDF generation

Keep public demo values in the client and private keys in `.env` only on a server deployment.
