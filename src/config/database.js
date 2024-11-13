const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`
        CREATE TABLE movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            year INTEGER,
            title TEXT,
            studios TEXT,
            producers TEXT,
            winner TEXT
        )
    `);
});

module.exports = db;