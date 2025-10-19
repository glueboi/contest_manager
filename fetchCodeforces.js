const sqlite3 = require('sqlite3').verbose();
const fetch = require('node-fetch'); // install with `npm install node-fetch@2`

const db = new sqlite3.Database('./contest.db');

// Fetch contests from Codeforces API
async function getContests() {
    try {
        const res = await fetch('https://codeforces.com/api/contest.list');
        const data = await res.json();

        if (data.status !== 'OK') {
            console.error('Codeforces API error');
            return;
        }

        const upcoming = data.result.filter(c => c.phase === 'BEFORE'); // only future contests

        upcoming.forEach(contest => {
            const title = contest.name;
            const start_time = new Date(contest.startTimeSeconds * 1000).toISOString().replace('T', ' ').slice(0, 16);
            const end_time = new Date((contest.startTimeSeconds + contest.durationSeconds) * 1000).toISOString().replace('T', ' ').slice(0, 16);
            const description = 'Codeforces Contest';

            // Insert into DB (ignore duplicates)
            db.run(
                'INSERT OR IGNORE INTO contests(title, start_time, end_time, description) VALUES(?,?,?,?)',
                [title, start_time, end_time, description],
                err => {
                    if (err) console.error(err.message);
                }
            );
        });

        console.log('Codeforces contests fetched and added to DB!');
    } catch (err) {
        console.error(err);
    } finally {
        db.close();
    }
}

getContests();
