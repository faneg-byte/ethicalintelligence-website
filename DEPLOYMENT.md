# Ethical Intelligence Website - Deployment Guide

## Google Cloud Deployment

This guide provides instructions for deploying the Ethical Intelligence website to Google Cloud Platform (GCP).

### Prerequisites

- Google Cloud Project with billing enabled
- `gcloud` CLI installed and configured
- Docker installed locally (optional, for local testing)

### Option 1: Deploy to Cloud Run (Recommended)

#### Step 1: Create a Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

#### Step 2: Build and Push to Container Registry

```bash
# Set your GCP project ID
export PROJECT_ID=your-project-id

# Build the Docker image
docker build -t gcr.io/$PROJECT_ID/ethical-intelligence:latest .

# Push to Google Container Registry
docker push gcr.io/$PROJECT_ID/ethical-intelligence:latest
```

#### Step 3: Deploy to Cloud Run

```bash
gcloud run deploy ethical-intelligence \
  --image gcr.io/$PROJECT_ID/ethical-intelligence:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000
```

### Option 2: Deploy to Cloud Source Repositories

#### Step 1: Create a Cloud Source Repository

```bash
gcloud source repos create ethical-intelligence-website
```

#### Step 2: Clone and Push the Code

```bash
# Clone the repository
gcloud source repos clone ethical-intelligence-website

# Copy the project files
cp -r ethicalintelligence-website/* ethical-intelligence-website/

# Push to Cloud Source Repositories
cd ethical-intelligence-website
git add -A
git commit -m "Initial commit"
git push origin main
```

#### Step 3: Set Up Cloud Build

Create a `cloudbuild.yaml` file in the project root:

```yaml
steps:
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/ethical-intelligence:latest', '.']
  
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/ethical-intelligence:latest']
  
  - name: 'gcr.io/cloud-builders/gke-deploy'
    args: ['run', '--filename=.', '--image=gcr.io/$PROJECT_ID/ethical-intelligence:latest', '--location=us-central1']

images:
  - 'gcr.io/$PROJECT_ID/ethical-intelligence:latest'
```

### Option 3: Deploy to App Engine

Create an `app.yaml` file:

```yaml
runtime: nodejs20

env: standard

handlers:
  - url: /.*
    script: auto
    secure: always
    redirect_http_response_code: 301
```

Deploy:

```bash
gcloud app deploy
```

### Environment Variables

Set the following environment variables in your Cloud Run or App Engine deployment:

```bash
NODE_ENV=production
PORT=3000
```

### Custom Domain Setup

After deployment, configure a custom domain:

```bash
gcloud run domain-mappings create \
  --service=ethical-intelligence \
  --domain=ethicalintelligence.cc \
  --region=us-central1
```

### Monitoring and Logging

View logs:

```bash
gcloud run logs read ethical-intelligence --limit 50
```

Monitor performance:

```bash
gcloud monitoring dashboards create --config-from-file=dashboard.json
```

### Troubleshooting

- **Build fails:** Ensure all dependencies are in `package.json`
- **Port issues:** The app runs on port 3000 by default
- **Memory issues:** Increase Cloud Run memory allocation to 512MB or higher

For more information, visit: https://cloud.google.com/run/docs
