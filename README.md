# Contest Manager

A lightweight **Contest Manager Web App** to track programming contests (local and Codeforces).  
Built with **Node.js, Express, SQLite** and a modern responsive frontend.

---

## Features

- Fetch and display **upcoming contests** from your local DB.
- Admin panel to **add contests manually**.
- Integration ready to fetch **Codeforces contests automatically**.
- Responsive, modern **contest cards** with hover effects.
- Clean architecture with separation of **backend and frontend**.

---

## Tech Stack

- **Backend:** Node.js, Express, SQLite  
- **Frontend:** HTML, CSS, Vanilla JS  
- **DB:** SQLite (lightweight and local)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/glueboi/contest_manager.git
cd contest_manager
2. Install dependencies
bash
Copy code
npm install
3. Setup the Database
bash
Copy code
node setupDB.js
4. (Optional) Fetch Codeforces Contests
bash
Copy code
node fetchCodeforces.js
5. Start the Server
bash
Copy code
node server.js
Open http://localhost:3000 in your browser.

Folder Structure
pgsql
Copy code
contest-manager/
├─ public/
│  ├─ index.html
│  └─ style.css
├─ server.js
├─ setupDB.js
├─ fetchCodeforces.js
├─ package.json
└─ package-lock.json
Contributing
Pull requests are welcome!
Feel free to add more contest platforms, improve frontend, or add problems per contest.

