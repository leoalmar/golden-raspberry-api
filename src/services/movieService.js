const movieRepository = require('../repositories/movieRepository');

async function getMovies() {
    try {
        const movies = await movieRepository.getMovies();
        return movies.map(movie => ({
            id: movie.id,
            year: movie.year,
            title: movie.title,
            studios: movie.studios,
            producers: movie.producers,
            winner: movie.winner === 'yes',
        }));
    } catch (error) {
        throw new Error('Erro ao processar os filmes vencedores');
    }
}

async function getWinnerMovies() {
    try {
        const movies = await movieRepository.getWinnerMovies();
        return movies.map(movie => ({
            year: movie.year,
            title: movie.title
        }));
    } catch (error) {
        throw new Error('Erro ao processar os filmes vencedores');
    }
}

module.exports = {
    getMovies,
    getWinnerMovies
};
