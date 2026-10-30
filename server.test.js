const request = require('supertest');
const app = require('./server');

let server;

beforeAll((done) => {
  // Si app.listen() est appelé dans server.js, récupérez l'instance ou lancez-la ici
  server = app.listen(3000, done); // Utiliser un port de test dédié
});

afterAll((done) => {
  if (server) {
    server.close(done); // Ferme proprement le port à la fin de tous les tests
  } else {
    done();
  }
});

describe('API Endpoints', () => {
  test('GET / returns app info', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('GET /health returns healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});