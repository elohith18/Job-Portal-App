# Job Portal

A full-stack job portal that connects job seekers with opportunities and helps employers share and manage job listings.

## Features

- Browse available job listings
- Search for jobs by title, company, or location
- View job details
- Create an account and sign in
- Apply for jobs as a candidate
- Post and manage job listings as an employer
- Responsive interface for desktop and mobile

> Keep only the features that are actually implemented in your app.

## Tech Stack

- **Frontend:** React, JavaScript, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** JWT

## How It Works

1. Employers create job listings.
2. Candidates browse listings and review job details.
3. Candidates submit applications through the portal.
4. The app stores job and application data in MongoDB.

Update these steps to match your app’s actual workflow.

## Run Locally

### Requirements

- Node.js and npm
- MongoDB, or a MongoDB Atlas connection

### 1. Clone the repository

```bash
git clone ADD_REPOSITORY_URL
cd ADD_PROJECT_FOLDER
```

### 2. Install dependencies

Use the commands that match your project structure. For example, if the frontend and backend have separate folders:

```bash
cd server
npm install

cd ../client
npm install
```

### 3. Configure environment variables

Create a `.env` file in the backend folder. Use the variable names your server expects. For example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Never commit real passwords, tokens, or secret keys to GitHub.

### 4. Start the app

Run the scripts defined in each folder’s `package.json`. For example:

```bash
# In the server folder
npm run dev
```

```bash
# In the client folder
npm run dev
```

## Project Structure

Update this example to match your repository:

```text
job-portal/
├── client/          # React frontend
├── server/          # Node.js and Express backend
├── .gitignore
└── README.md
```

## What I Learned

- Building a full-stack application with the MERN stack
- Connecting a React frontend to a Node.js and Express API
- Storing and retrieving application data with MongoDB

