const request = require('supertest');
const app = require('../src/server');

function validateProducerInterval(item) {
    expect(item).toHaveProperty('producer');
    expect(item).toHaveProperty('interval');
    expect(item).toHaveProperty('previousWin');
    expect(item).toHaveProperty('followingWin');
    expect(typeof item.producer).toBe('string');
    expect(typeof item.interval).toBe('number');
    expect(typeof item.previousWin).toBe('number');
    expect(typeof item.followingWin).toBe('number');
    expect(item.interval).toBeGreaterThan(0);
    expect(item.previousWin).toBeLessThan(item.followingWin);
}

function validateList(list) {
    list.forEach(validateProducerInterval);
}

describe('GET /api/producers', () => {
    it('should return the producer with the min and max intervals', async () => {
        const res = await request(app).get('/api/producers');

        expect(res.statusCode).toEqual(200);

        expect(res.body).toHaveProperty('min');
        expect(res.body).toHaveProperty('max');

        expect(res.body.min).toBeInstanceOf(Array);
        expect(res.body.max).toBeInstanceOf(Array);

        validateList(res.body.min);
        validateList(res.body.max);
    });
});
