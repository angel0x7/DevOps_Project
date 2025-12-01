const request = require('supertest');
const app = require('../app');

describe("test de la page web", () => {

    test("GET / devrait retourner 200", async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    });

    test("GET /health retourne ok", async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('ok');
    });

});
