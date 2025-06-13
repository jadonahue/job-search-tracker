# Job Search Tracker

A fullstack application to help you track your job applications across different stages like **Applied**, **Interviewing**, **Offer**, and **Rejected** — all in one intuitive dashboard.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

-   🗂️ Kanban-style job tracking board
-   🔐 User authentication with Supabase
-   ☁️ Backend powered by Express.js & Supabase
-   ⚡ Fast and responsive frontend using Next.js and Tailwind CSS
-   🎯 Clean, modern UI with Heroicons

## Tech Stack

| Tech             | Description                         |
| ---------------- | ----------------------------------- |
| **Next.js**      | React framework for the frontend    |
| **Tailwind CSS** | Utility-first CSS framework         |
| **Express.js**   | Lightweight backend server          |
| **Supabase**     | PostgreSQL + Auth + Storage backend |
| **Axios**        | For HTTP requests                   |
| **UUID**         | Unique ID generation                |
| **Heroicons**    | Icon set for UI elements            |

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/job-search-tracker.git
cd job-search-tracker
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Create the required .env file.

I used Vercel/Supabase postgresSQL

### Run The App Locally

npm run dev

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
