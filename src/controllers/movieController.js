const movieService = require('../services/movieService');

async function getMovies(req, res) {
    try {
        const movies = await movieService.getMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getWinningMovies(req, res) {
    try {
        const movies = await movieService.getWinnerMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getMovies,
    getWinningMovies,
};
