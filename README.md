# Precedent Ai - Frontend

This is the frontend application for **Precedent Ai**, your Ai co-counsel for legal research. Built with [Next.js](https://nextjs.org) and modern web technologies to deliver fast, intuitive legal research experiences.

## About Precedent Ai

Precedent Ai revolutionizes legal research by providing:

- 🔍 **Natural language search** - Ask questions in plain English
- ⚖️ **Real case law** - Grounded in actual court precedents
- 📄 **Legal reasoning** - Understand the logic, not just outcomes
- ⏱️ **Time-saving** - Find answers in minutes, not hours
- 💸 **Affordable** - Free alternative to expensive legal databases

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **UI Components**: Custom component library
- **Fonts**: Geist Sans & Geist Mono

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, etc.)
│   └── layout/         # Layout components (Header, etc.)
└── lib/                # Utility functions
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to Vercel

Follow these steps to deploy your Precedent Ai frontend to Vercel:

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:

   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure Project**:

   - **Project Name**: `precedent-ai-frontend` (or your preference)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-configured)
   - **Output Directory**: `.next` (auto-configured)

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - You'll get a live URL like `https://precedent-ai-frontend.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts to configure your project
   - Vercel will deploy and provide a live URL

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/legal-ai-frontend)

### Environment Variables (if needed)

If your app requires environment variables:

1. In your Vercel dashboard, go to your project
2. Navigate to **Settings** → **Environment Variables**
3. Add any required variables:
   ```
   NEXT_PUBLIC_API_URL=your-backend-url
   ```

### Custom Domain (Optional)

1. In your Vercel project dashboard
2. Go to **Settings** → **Domains**
3. Add your custom domain (e.g., `app.precedentai.com`)
4. Follow Vercel's DNS configuration instructions

### Automatic Deployments

Once connected to GitHub:

- **Production**: Pushes to `main` branch auto-deploy to production
- **Preview**: Pushes to other branches create preview deployments
- **Pull Requests**: Automatic preview deployments for code review

For more details, check the [Vercel Documentation](https://vercel.com/docs) and [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).
