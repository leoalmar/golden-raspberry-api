const movieService = require('../services/movieService'); // Service dos movies

async function getWinnerMovies() {
    return await movieService.getWinnerMovies(); // Obtém os filmes vencedores do service
}

module.exports = { getWinnerMovies };
