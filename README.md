# Naresh Kumar Katta Portfolio

Personal portfolio site built with Angular and deployed on Netlify.

## Tech Stack

- Angular 21
- Angular SSR / prerender
- Tailwind CSS
- Angular Material
- Motion

## Run Locally

Prerequisite: Node.js 22+

1. Install dependencies:
   `npm install`
2. Start the development server:
   `npm start`
3. Open:
   `http://localhost:4200`

## Production Build

Build the app and prerender static routes:

`npm run build`

The output is generated in:

`dist/app`

## Resume Download

The Resume and Download CV buttons point to the hosted PDF below:

`https://raw.githubusercontent.com/devnareshkumar/devnareshkumar/main/Naresh-Kumar-Katta-Resume.pdf`

To update the resume, replace that PDF in GitHub using the same file name and path.

## Deployment

This project is configured to deploy on Netlify.

Recommended deploy flow:

1. Push changes to GitHub.
2. Trigger a Netlify deploy.
3. Verify the home page and resume download after deploy.
