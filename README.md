
# 🤖 AI Chatbot – MERN Stack (Full Stack Project)

A full-stack AI Chatbot web application built using the MERN stack (MongoDB, Express, React, Node.js) with authentication and real-time chat interface.  
This project was developed as a Full Stack Developer Internship Assignment.

---

## 🚀 Live Demo

- 🌐 Frontend (Vercel): https://suraj-ai-chat-bot.vercel.app/
- 🖥 Backend (Render): https://ai-chat-bot-full.onrender.com  
- 📦 GitHub Repo: https://github.com/suraj2510/ai-chat-bot-full  

---

## 🧠 Features

- 🔐 User Authentication (Signup & Login with JWT)
- 💬 AI Chat Interface (Real-time messaging UI)
- 🎨 Dark / Light Mode Toggle
- 📡 REST API Integration
- 🗄 MongoDB Database (User & Chat Storage)
- ☁️ Full Deployment (Frontend + Backend)
- 📱 Responsive Chat UI (Modern Design)

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs (Password Hashing)
- CORS & dotenv

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📁 Project Structure



ai-chat-bot-full/
│
├── client/ # Frontend (React + Vite)
│ ├── src/
│ ├── public/
│ └── package.json
│
├── server/ # Backend (Node + Express)
│ ├── models/
│ │ ├── User.js
│ │ └── Chat.js
│ ├── routes/
│ ├── middleware/
│ └── index.js
│
└── README.md


---

## ⚙️ Installation & Setup (Local Development)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/suraj2510/ai-chat-bot-full.git
cd ai-chat-bot-full

2️⃣ Setup Backend
cd server
npm install


Create a .env file inside the server folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm run dev

3️⃣ Setup Frontend
cd client
npm install


Create a .env file inside the client folder:

VITE_API_URL=http://localhost:5000


Run frontend:

npm run dev


Frontend will run on:

http://localhost:5173

🔐 Environment Variables
Backend (.env)
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret

Frontend (.env)
VITE_API_URL=https://your-backend-url.onrender.com

🌍 Deployment
🖥 Backend Deployment (Render)

Root Directory: server

Build Command: npm install

Start Command: npm start

Add Environment Variables in Render Dashboard

🌐 Frontend Deployment (Vercel)

Framework: Vite

Root Directory: client

Build Command: npm run build

Output Directory: dist

Environment Variable:

VITE_API_URL=https://ai-chat-bot-full.onrender.com

🧪 API Endpoints
Auth Routes

POST /api/auth/signup → Register User

POST /api/auth/login → Login User

Chat Routes

POST /api/chat → Send message & get AI response (Protected Route)

🔒 Authentication Flow

User signs up / logs in

JWT token is stored in localStorage

Token is sent in Authorization header

Protected routes verify user before processing chat

📸 Screenshots

Login Page

Signup Page

Chat Interface (Dark Mode)

AI Response UI

(Add screenshots here if required by assignment)

🎯 Assignment Highlights

This project demonstrates:

Full-stack MERN development

API integration

Authentication system

Deployment on cloud platforms

Clean UI/UX design

Production-ready folder structure

👨‍💻 Author

Suraj Maurya
Full Stack Developer (MERN)
GitHub: https://github.com/suraj2510

⭐ Conclusion

This AI Chatbot application showcases end-to-end full-stack development including frontend UI, backend APIs, authentication, database integration, and cloud deployment — fulfilling all requirements of a MERN Stack AI Chatbot assignment.


---
