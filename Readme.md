# 🔐 Auth Service - 3D Architectural Design Platform

The **Auth Service** is a microservice responsible for managing user authentication and authorization in the 3D Architectural Design Platform. It handles secure user registration, login, password management, token handling, and authentication middleware using JWTs.

---

## 🚀 Features

- ✅ User Registration & Login
- 🔐 JWT-based Access & Refresh Tokens
- 🔄 Token Refresh Endpoint
- ✉️ Email Verification & Password Reset Support
- 🧱 Secure Middleware Protection
- 🌐 Deployed on both [Render](https://render.com/) and Docker

---

## 🧠 Tech Stack

- **Node.js** with **Express**
- **MongoDB** with **Mongoose**
- **JWT** for Authentication
- **bcrypt** for Password Hashing
- **dotenv**, **cors**, **cookie-parser**
- Optional: **Nodemailer**, **Redis**, **Rate Limiting**

---

## 📁 Folder Structure

auth-service/
├── config/ # MongoDB and JWT config
│ └── db.js
├── controllers/ # Auth controller logic
│ └── authController.js
├── middleware/ # Token and role verification
│ └── authMiddleware.js
├── models/ # Mongoose schemas
│ └── User.js
├── routes/ # Route definitions
│ └── authRoutes.js
├── utils/ # Token, email, etc.
│ └── generateToken.js
├── .env # Environment config
├── Dockerfile # Docker support
├── server.js # Entry point
└── README.md # This file


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_service
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:3000

🧪 API Endpoints
📌 Auth Routes

| Method | Endpoint                        | Description                  | Auth |
| ------ | ------------------------------- | ---------------------------- | ---- |
| POST   | `/api/auth/register`            | Register new user            | ❌    |
| POST   | `/api/auth/login`               | Login user and return tokens | ❌    |
| POST   | `/api/auth/logout`              | Logout user                  | ✅    |
| POST   | `/api/auth/refresh-token`       | Issue new access token       | ❌    |
| GET    | `/api/auth/verify-token`        | Verify current access token  | ✅    |
| POST   | `/api/auth/forgot-password`     | Send reset email             | ❌    |
| POST   | `/api/auth/reset-password`      | Reset password with token    | ❌    |
| GET    | `/api/auth/email-verify/:token` | Verify email                 | ❌    |

🧰 Usage Instructions
▶️ Local Development

git clone https://github.com/aaradhayasingh811/auth-service.git
cd auth-service
npm install
npm run dev

🐳 Docker Deployment
📄 Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]


🐳 Run with Docker
docker-compose up --build

git clone 
cd your-repo
# create .env with your env variables
docker-compose up --build

Extra: If they want to run in detached mode (in background):
docker-compose up -d --build
If they want to stop containers later:
docker-compose down



