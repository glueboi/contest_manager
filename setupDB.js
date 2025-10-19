const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./contest.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS contests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        start_time TEXT NOT NULL,
        end_time TEXT NOT NULL,
        description TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS problems (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        contest_id INTEGER,
        title TEXT NOT NULL,
        link TEXT,
        FOREIGN KEY(contest_id) REFERENCES contests(id)
    )`);
});

console.log('DB setup done!');
db.close();
