const request = require('supertest');
const app = require('../src/server');

describe('GET /api/movies', () => {
    it('should return the movies', async () => {
        const res = await request(app).get('/api/movies');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);

        res.body.forEach(movie => {
            expect(movie).toHaveProperty('year');
            expect(movie).toHaveProperty('title');
            expect(typeof movie.year).toBe('number');
            expect(typeof movie.title).toBe('string');
        });
    });
});
