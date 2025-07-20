# Game Library API

This is backend ame Library API with Authentication that uses different frameworks:
A Node.js + Express + MongoDB API with user authentication, CRUD, search, filtering, and additonal protections.

---

## SETUP INSTRUCTIONS

1. Clone the repo

```bash
git clone https://github.com/jesselouiselat/game-library-backend.git
```

2. Go into the folder

```bash
cd game-library-backend
```

3. Install dependencies:

```bash
  npm install
```

4. Create a .env file in the root folder with the following variables:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/<folder name>
JWT_SECRET=<yourSuperSecretKey>
```

5. Start MongoDB (locally):

```bash
    mongod
```

- If error: create a db folder manually:

```bash
 C:/data/db
```

- If error persist, use this instead:

```bash
mongod --dbpath "C:\data\db"
```

6. Start the server:

```bash
   npm start
```

7. To check if the server is running. open your browser and got to: http://localhost:5000/test

---

## JWT USAGE + .env SETUP

- JWT is used to secure protected routes:
  [Go to routes](#postman-sample-requests-no-collection-needed)
- After login, copy and paste the token to clipboard/notepad.
- Use this token in Postman or frontend as a Bearer token in headers

- .env format:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/<folder name>
JWT_SECRET=<yourSuperSecretKey>
```

---

## POSTMAN SAMPLE REQUESTS (NO COLLECTION NEEDED)

- Register a User:
  POST: http://localhost:5000/api/auth/register

  - Body (JSON):

```bash
{
"username": "juan",
"email": "juan@email.com",
"password": "123456"
}
```

- Login a User:
  POST: http://localhost:5000/api/auth/login

  - Body (JSON):

```bash
  {
  "email": "juan@email.com",
  "password": "123456"
  }
```

Returns:

```bash
{ "token": "your.jwt.token" }
```

Copy and paste the token to the clipboard or notepad.

- Add a Game (Requires JWT):
  POST: http://localhost:5000/api/game
  - Headers:
    Authorization: Bearer YOUR_TOKEN
  - Body (JSON):

```bash
    {
    "title": "God of War",
    "genre": "Action",
    "platform": "PS5"
    }
```

- Get All Games:
  GET: http://localhost:5000/api/game

- Search Games:
  GET: http://localhost:5000/api/game/search?keyword=war

- Update Game:
  PUT: http://localhost:5000/api/game/GAME_ID
  Authorization: Bearer YOUR_TOKEN

- Delete Game:
  DELETE: http://localhost:5000/api/game/GAME_ID
  Authorization: Bearer YOUR_TOKEN

---

## 📦 THIRD-PARTY PACKAGES USED

All installed with npm install

- bcrypt – hashes user passwords securely
- dotenv – manages secret environment variables for JWT and DB URI
- express – main web framework
- mongoose – MongoDB database
- jsonwebtoken – generates and verifies JWT tokens
- express-rate-limit – limits requests to prevent abuse or overuse
- morgan – logs incoming requests in the console

---

## FOLDER STRUCTURE

```
├── controllers/
│ ├── authController.js
│ └── gameController.js
├── middlewares/
│ ├── authMiddleware.js
│ └── rateLimit.js
├── models/
│ ├── Game.js
│ └── User.js
├── routes/
│ ├── authRoutes.js
│ └── gameRoutes.js
├── .env
├── server.js
├── package.json
```

---

## Contact

Jesse Louise Lat
https://github.com/jesselouiselat
jesselouiselat@gmail.com
