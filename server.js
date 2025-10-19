const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // frontend files

const db = new sqlite3.Database('./contest.db');

app.get('/api/contests', (req, res) => {
    db.all('SELECT * FROM contests', [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
});

app.post('/api/contests', (req, res) => {
    const { title, start_time, end_time, description } = req.body;
    db.run('INSERT INTO contests(title,start_time,end_time,description) VALUES(?,?,?,?)',
        [title, start_time, end_time, description],
        function(err) {
            if(err) return res.status(500).send(err.message);
            res.json({ id: this.lastID });
        });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
