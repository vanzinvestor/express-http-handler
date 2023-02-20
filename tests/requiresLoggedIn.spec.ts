import express, { NextFunction, Request, Response } from 'express';
import request from 'supertest';
import { expect } from 'chai';
import { requiresLoggedIn } from '../src/index';

describe('requiresLoggedIn tests', function () {
  const app = express();

  app.get(
    '/secure',
    (req: Request, res: Response, next: NextFunction) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (<any>req).user = { nam: 'john' };
      next();
    },
    requiresLoggedIn,
    function (req: Request, res: Response) {
      res.status(200).json({ message: 'This is secure area' });
    }
  );

  app.get(
    '/not-secure',
    (req: Request, res: Response, next: NextFunction) => {
      next();
    },
    requiresLoggedIn,
    function (req: Request, res: Response) {
      res.status(200).json({ message: 'This is secure area' });
    }
  );

  it('user loggedin', async function () {
    const response = await request(app)
      .get('/secure')
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).match(/application\/json/);
    expect(response.status).equal(200);
    expect(response.body.message).equal('This is secure area');
  });

  it('user not loggedin', async function () {
    const response = await request(app)
      .get('/not-secure')
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).match(/application\/json/);
    expect(response.status).equal(403);
    expect(response.body.message).equal('Access is forbidden');
  });
});
