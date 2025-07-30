# 🔐 Simple User Authentication API (Node.js + MongoDB + JWT)

This project is a **basic user authentication system** built with Node.js and MongoDB.  
It supports **user registration**, **login with JWT**, and **access control** using roles.

---

## 📋 Project Tasks & Features

### ✅ 1. Project Structure - MVC Pattern

- 📂 `models/` — MongoDB schemas using Mongoose
- 📂 `controllers/` — Logic for handling register, login, get users
- 📂 `routes/` — API endpoints
- 📂 `middleware/` — Custom middleware for JWT and Admin checks

---

### ✅ 2. Database - MongoDB with Mongoose

- MongoDB used to store users
- Mongoose schema validates:
  - Email format
  - Strong passwords
  - Minimum age
  - Valid gender and profile photo URL

---

### ✅ 3. Register a User

- Route: `POST /api/auth/register`
- Passwords are **hashed** with `bcrypt`
- Validates user input using `validator`
- Returns success message on save

---

### ✅ 4. Login a User

- Route: `POST /api/auth/login`
- Email and password checked
- If correct, returns a **JWT token**
- JWT is signed using a secret key and expires in 1 hour

---

### ✅ 5. Token-Based Authentication

- Middleware reads the token from `Authorization` header
- Verifies token using `jsonwebtoken`
- Adds decoded user data to `req.user`

---

### ✅ 6. Admin-Only Access

- Route: `GET /api/auth/getUser`
- Protected with:
  - `authMiddleware` (checks if token is valid)
  - `adminMiddleware` (checks if user is an Admin)
- Only Admins can see all users

---

### 🧪 Sample Requests

#### 🔐 Register

```http
POST /api/auth/register
{
  "username": "srithar_dev",
  "emailId": "srithar@example.com",
  "password": "Strong@123",
  "age": 22,
  "gender": "male"
}

#### Login

{
  "emailId": "srithar@example.com",
  "password": "Strong@123"
}
🔒 Get All Users (Admin only)

GET /api/auth/getUser
Headers:
Authorization: Bearer <JWT_TOKEN>

🔧 .env Configuration
Create a .env file like this:

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

🚀 Getting Started
npm install
npm run dev

Open your browser or Postman at: http://localhost:5000

🧰 Tech Used
Express.js

MongoDB + Mongoose

JWT

bcrypt

dotenv

validator

🙋 Author
Made with  by Srithar Srinivasan

