# 🔐 Auth Service - 3D Architectural Design Platform

The **Auth Service** is a Node.js microservice responsible for user authentication and authorization in the 3D Architectural Design Platform. It provides secure user registration, login, JWT-based authentication, password reset via OTP, Google OAuth, and user profile management. This service is designed to be used as part of a microservices architecture and can be deployed independently.

---

## 📦 Folder Structure

```
auth-service/
├── config/           # Database and environment configuration
│   └── index.js
├── controllers/      # Business logic for authentication
│   └── auth.controller.js
├── middlewares/      # Express middlewares (e.g., authentication)
├── models/           # Mongoose schemas
│   └── user.model.js
├── routes/           # Express route definitions
│   └── auth.routes.js
├── services/         # (Optional) Service layer for business logic
├── utils/            # Utility functions (email, token, verification)
│   ├── email.js
│   ├── token.js
│   └── verification.js
├── validations/      # (Optional) Request validation logic
├── .env              # Environment variables
├── Dockerfile        # Docker configuration
├── docker-compose.yml
├── package.json
├── Readme.md
└── src/
    └── app.js        # Main Express app entry point
```

---

## 🚀 Features

- **User Registration & Login** (with username/email)
- **JWT-based Authentication** (access tokens via cookies)
- **Google OAuth2 Login**
- **Password Reset via OTP** (email-based)
- **Profile Management** (get, update, delete)
- **Email Verification** (token-based, optional)
- **Secure Middleware Protection**
- **Docker & Docker Compose Support**
- **Environment-based Configuration**

---

## 🧠 Tech Stack

- **Node.js** with **Express**
- **MongoDB** with **Mongoose**
- **JWT** for Authentication
- **bcrypt** for Password Hashing
- **dotenv**, **cors**, **cookie-parser**

---

## ⚙️ Environment Variables

Create a `.env` file in the project root with the following variables:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/auth_service
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
FRONTEND_URL=http://localhost:5173
```

---

## 🧪 API Endpoints

All endpoints are prefixed with `/api/v1`.

| Method | Endpoint                | Description                    | Auth Required |
|--------|------------------------|--------------------------------|--------------|
| POST   | `/register`            | Register new user              | ❌           |
| POST   | `/login`               | Login user                     | ❌           |
| POST   | `/logout`              | Logout user                    | ✅           |
| POST   | `/auth/google`         | Google OAuth login             | ❌           |
| POST   | `/send-otp`            | Send OTP for password reset    | ❌           |
| POST   | `/verify-otp`          | Verify OTP for password reset  | ❌           |
| POST   | `/reset-password`      | Reset password using OTP       | ❌           |
| GET    | `/profile`             | Get user profile               | ✅           |
| PUT    | `/profile`             | Update user profile            | ✅           |
| DELETE | `/profile`             | Delete user profile            | ✅           |

> **Note:** Some endpoints like email verification may be implemented in [`utils/verification.js`](src/utils/verification.js).

---

## 🛠️ Usage

### 1. Clone and Install

```sh
git clone https://github.com/yourusername/auth-service.git
cd auth-service
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in your values.

### 3. Run Locally

```sh
npm start
```

The service will run on `http://localhost:4000` by default.

### 4. Docker Usage

#### Build and Run with Docker Compose

```sh
docker-compose up --build
```

This will start both the auth service and a MongoDB instance.

#### Stop Containers

```sh
docker-compose down
```

---

## 📝 Example Requests

### Register

```http
POST /api/v1/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "username": "johnny",
  "password": "yourpassword"
}
```

### Login

```http
POST /api/v1/login
Content-Type: application/json

{
  "emailOrUsername": "john@example.com",
  "password": "yourpassword"
}
```

### Send OTP

```http
POST /api/v1/send-otp
Content-Type: application/json

{
  "email": "john@example.com"
}
```

### Reset Password

```http
POST /api/v1/reset-password
Content-Type: application/json

{
  "email": "john@example.com",
  "otp": "123456",
  "password": "newpassword"
}
```

---

## 🔒 Security Notes

- Passwords are hashed using bcrypt before storage.
- JWT tokens are signed with a secret and sent as HTTP-only cookies.
- OTPs for password reset are time-limited and stored securely.
- CORS is configured to allow requests from the frontend URL.
- Sensitive configuration is managed via environment variables.

---

## 🧩 Extending the Service

- Add more social login providers (Facebook, GitHub, etc.)
- Implement rate limiting for brute-force protection.
- Add email verification flow (see [`utils/verification.js`](src/utils/verification.js)).
- Integrate with a user management dashboard.

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## 📄 License

This project is licensed under the ISC License.

---

## 📬 Contact

For questions, contact [your-email@example.com](mailto:your-email@example.com).

---

## 📚 Related Files

- [src/app.js](src/app.js) - Main Express app
- [src/routes/auth.routes.js](src/routes/auth.routes.js) - Route definitions
- [src/controllers/auth.controller.js](src/controllers/auth.controller.js) - Controller logic
- [src/models/user.model.js](src/models/user.model.js) - User schema
- [src/utils/email.js](src/utils/email.js) - Email sending utility
- [src/utils/token.js](src/utils/token.js) - JWT utilities
- [src/utils/verification.js](src/utils/verification.js) - Email verification utilities

---

**Happy Coding!**