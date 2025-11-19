const request = require('supertest');
const app = require('../app');

describe('Basic Tests', () => {

    test('Home returns text', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Server is running! 👍');
    });

    test('Sum API works', async () => {
        const res = await request(app).get('/sum?a=5&b=7');
        expect(res.body.result).toBe(12);
    });

});
