const { expect } = require('chai');

const app = require('supertest')(require('../app'));

const { syncAndSeed } = require('../db');

describe('Routes', ()=> {
    beforeEach(()=> syncAndSeed());
    describe('GET /', () => {
        it('show home page', async()=> {
            const response = await app.get('/');
            expect(response.status).to.equal(200)
            expect(response.text).to.include('The Home Page');
        });
    });
    describe('GET /api/movies', () => {
        it('show list of all movies', async()=> {
            const response = await app.get('/api/movies');
            expect(response.status).to.equal(200);
        });
    });
    describe('GET /api/actors', () => {
        it('show list of all actors', async()=> {
            const response = await app.get('/api/actors');
            expect(response.status).to.equal(200);
        });
    });
});