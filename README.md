# Social Media API

A full-featured RESTful backend API for a modern social media platform built with **Node.js**, **Express**, and **MongoDB**.

## 🔧 Features

- 👤 User Registration & Login (JWT-based Auth)
- 📝 Create & View Posts
- ❤️ Like/Unlike Posts
- 💬 Comment on Posts
- 👥 Follow/Unfollow Users
- 🔐 Protected Routes via Middleware

## 🛠 Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- JWT (Authentication)
- Bcrypt (Password hashing)

## 🚀 Getting Started

### 1. Clone the repository
      bash
      git clone https://github.com/<your-username>/social-media-api.git
      cd social-media-api

### 2. Install dependencies
      bash
      npm install
### 3. Set up environment variables
  Create a .env file based on .env.example:

      env
      MONGO_URI=your_mongo_uri
      JWT_SECRET=your_secret
      PORT=5000
### 4. Run the server
    bash
    npm start
Server will run on http://localhost:5000.

📮 API Endpoints
Auth
POST /api/auth/register

POST /api/auth/login

Users
POST /api/users/me – Get current user (requires token in body)

Posts
POST /api/posts – Create post

GET /api/posts – List posts

PUT /api/posts/:id/like – Like/unlike a post

POST /api/posts/:id/comment – Add a comment

Follow
PUT /api/follow/:id – Follow or unfollow user

**📁 Folder Structure**
  ```bash
      controllers/   → Business logic
      models/        → Mongoose schemas
      routes/        → API route definitions
      middleware/    → Auth & error handling
      config/        → DB connection
      utils/         → Token generator
