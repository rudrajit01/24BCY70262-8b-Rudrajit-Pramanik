# JWT Protected Routes with React + Express

A complete implementation of protected routes using JWT (JSON Web Token) authentication. The backend verifies the token via middleware, and the frontend uses React Router with route guards.

## Features

- JWT generation and verification
- Protected API endpoints with Express middleware
- React Router private routes (route guards)
- Token storage in localStorage
- Logout functionality
- Git ignored `node_modules`

## Tech Stack

**Backend:** Node.js, Express, jsonwebtoken, cors  
**Frontend:** React 18+, React Router 6+, Axios  

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/rudrajit01/24BCY70262-8b-Rudrajit-Pramanik.git
cd 24BCY70262-8b-Rudrajit-Pramanik
2. Install backend dependencies
bash
npm install
3. Install frontend dependencies
bash
cd frontend
npm install
cd ..
4. Run the application
Start backend server (port 5000):

bash
node server.js
Start frontend development server (port 3000):

bash
cd frontend
npm start
Open http://localhost:3000 to view the app.

Usage
Login credentials:
Username: test
Password: testpass (or 1234 depending on your backend config)

After successful login, the JWT token is stored in localStorage.

Access the /protected route – only visible when authenticated.

Click Logout to clear the token and redirect to login.

API Endpoints
Method	Endpoint	Description	Access
POST	/api/login	Authenticate & receive JWT	Public
GET	/api/protected	Get protected data (needs JWT)	Private (Bearer token)
Project Structure
text
.
├── server.js               # Express server with JWT middleware
├── package.json            # Backend dependencies
├── .gitignore              # Ignores node_modules, .env etc.
├── frontend/
│   ├── src/
│   │   ├── App.js          # React Router setup
│   │   ├── Login.js        # Login form
│   │   ├── Protected.js    # Protected dashboard
│   │   └── PrivateRoute.js # Route guard component
│   └── package.json        # Frontend dependencies
└── README.md
Important Notes
node_modules is ignored via .gitignore – run npm install after cloning.

The secret key in server.js should be moved to .env in production.

Token expiration is set to 1 hour (adjustable).

License
This project is for educational purposes (JWT authentication demonstration).

Author
Rudrajit Pramanik
