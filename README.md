# Ethical Intelligence Website

Enterprise-grade AI infrastructure and sustainability consulting website for Lignes LLC. This is a modern React/Vite application with a dark theme and gold accents.

## Project Overview

**Ethical Intelligence** is a B2B SaaS platform offering:
- **B2B SaaS Solutions:** Scalable, AI-driven platforms including the Lifecycle Integrated Value Matrix Engine and Soccer Prediction Engine
- **Sustainability Consulting:** Strategic guidance for ESG goals and environmental regulations
- **Corporate Supply & M&A:** End-to-end RFP fulfillment and strategic business acquisitions

## Technology Stack

- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Backend:** Express.js (minimal)
- **Package Manager:** pnpm
- **Deployment:** Google Cloud Run / App Engine

## Project Structure

```
ethicalintelligence-website/
├── client/
│   ├── public/              # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                  # Express server
├── shared/                  # Shared types and constants
├── Dockerfile              # Docker configuration
├── cloudbuild.yaml         # Google Cloud Build config
├── app.yaml                # App Engine config
├── package.json            # Dependencies
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (or npm/yarn)
- Docker (for containerized deployment)

### Local Development

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:3000`

3. **Build for production:**
   ```bash
   pnpm build
   ```

4. **Preview the production build:**
   ```bash
   pnpm preview
   ```

## Deployment

### Option 1: Google Cloud Run (Recommended)

**Prerequisites:**
- Google Cloud Project with billing enabled
- `gcloud` CLI installed and configured

**Steps:**

1. **Set your project ID:**
   ```bash
   export PROJECT_ID=your-gcp-project-id
   ```

2. **Build and push the Docker image:**
   ```bash
   docker build -t gcr.io/$PROJECT_ID/ethical-intelligence:latest .
   docker push gcr.io/$PROJECT_ID/ethical-intelligence:latest
   ```

3. **Deploy to Cloud Run:**
   ```bash
   gcloud run deploy ethical-intelligence \
     --image gcr.io/$PROJECT_ID/ethical-intelligence:latest \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --port 3000
   ```

### Option 2: Google Cloud Build (Automated)

1. **Connect your GitHub repository to Cloud Build:**
   - Go to Cloud Build in the Google Cloud Console
   - Click "Connect Repository"
   - Select GitHub and authorize
   - Select this repository

2. **Create a build trigger:**
   - In Cloud Build, click "Create Trigger"
   - Set the trigger to build on push to the main branch
   - Select the `cloudbuild.yaml` file as the build configuration

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```
   Cloud Build will automatically build and deploy to Cloud Run.

### Option 3: App Engine

1. **Deploy using gcloud CLI:**
   ```bash
   gcloud app deploy
   ```

2. **View your application:**
   ```bash
   gcloud app browse
   ```

## Environment Variables

Set these environment variables in your deployment:

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Production environment |
| `PORT` | `3000` | Server port |

## Custom Domain Setup

After deployment, configure a custom domain:

```bash
gcloud run domain-mappings create \
  --service=ethical-intelligence \
  --domain=ethicalintelligence.cc \
  --region=us-central1
```

Then update your domain's DNS records to point to Google Cloud.

## Monitoring and Logging

**View Cloud Run logs:**
```bash
gcloud run logs read ethical-intelligence --limit 50
```

**View App Engine logs:**
```bash
gcloud app logs read
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Ensure all dependencies are in `package.json` and `pnpm-lock.yaml` is committed |
| Port issues | The app runs on port 3000 by default; ensure it's exposed in Dockerfile |
| Memory errors | Increase Cloud Run memory allocation to 512MB or higher |
| Slow builds | Use Cloud Build's caching to speed up subsequent builds |

## Design

The website features:
- **Dark theme** with gold accents (`#fbbf24`)
- **Enterprise-grade layout** with navigation, hero section, and product showcase
- **Responsive design** for mobile, tablet, and desktop
- **Professional components** using shadcn/ui
- **Smooth animations** and transitions

## GitHub Repository

**Public Repository:** https://github.com/faneg-byte/ethicalintelligence-website

## Contributing

For development and contributions, please follow these guidelines:

1. Create a new branch for your feature
2. Make your changes
3. Test locally with `pnpm dev`
4. Commit with clear messages
5. Push to GitHub and create a pull request

## License

This project is proprietary software owned by Lignes LLC. All rights reserved.

## Support

For issues, questions, or deployment assistance, please contact the development team.

## Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Google Cloud Run Documentation](https://cloud.google.com/run/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
