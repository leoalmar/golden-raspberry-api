const fs = require('fs');
const csv = require('csv-parser');
const db = require('../config/database');

function loadData() {
    fs.createReadStream('src/data/movielist.csv')
        .pipe(csv({ separator: ';' }))
        .on('data', (row) => {
            db.run(
                `INSERT INTO movies (year, title, studios, producers, winner) VALUES (?, ?, ?, ?, ?)`,
                [row.year, row.title, row.studios, row.producers, row.winner || 'no']
            );
        });
}

module.exports = loadData;
