const db = require('../config/database');

function getAllFromDb(query) {
    return new Promise((resolve, reject) => {
        db.all(query, (err, rows) => {
            if (err) {
                reject(new Error('Erro ao consultar o banco de dados'));
            } else {
                resolve(rows);
            }
        });
    });
}

async function getMovies() {
    return getAllFromDb(`SELECT * FROM movies ORDER BY year;`);
}

async function getWinnerMovies() {
    return getAllFromDb(`SELECT * FROM movies WHERE winner = 'yes' ORDER BY year;`);
}

module.exports = {
    getMovies,
    getWinnerMovies
};
