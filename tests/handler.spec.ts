import express, { Request, Response } from 'express';
import request from 'supertest';
import { expect } from 'chai';
import { notFoundHandler, errorHandler } from '../src/index';

describe('notFoundHandler and errorHandler tests', function () {
  const app = express();

  app.get('/users', function (req: Request, res: Response) {
    res.status(200).json({ name: 'users' });
  });

  app.use(notFoundHandler);
  app.use(errorHandler);

  it('notFoundHandler', async function () {
    const response = await request(app)
      .get('/user')
      .set('Accept', 'application/json');

    expect(response.status).equal(404);
    expect(response.body.message).equal('Url Not Found - /user');
  });

  it('errorHandler', async function () {
    const response = await request(app)
      .get('/user')
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).match(/application\/json/);
    expect(response.status).equal(404);
    expect(response.body.message).equal('Url Not Found - /user');
  });
});
