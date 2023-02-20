import express, { Request, Response } from 'express';
import request from 'supertest';
import { expect } from 'chai';
import { validateRequest } from '../src/index';
import { object, string } from 'yup';

const userLoginSchema = object({
  body: object({
    email: string().email('Email is invalid').required('Email is required'),
    password: string().required('Password is required'),
  }),
});

describe('validateRequest tests', function () {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post(
    '/login',
    validateRequest(userLoginSchema),
    function (req: Request, res: Response) {
      res.status(200).json({ message: 'This is secure area' });
    }
  );

  it('user login email invalid', async function () {
    const response = await request(app)
      .post('/login')
      .send({ email: 'john', password: '123456789' })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).match(/application\/json/);
    expect(response.status).equal(400);
    expect(response.body.message).equal('Email is invalid');
  });

  it('user login pass', async function () {
    const response = await request(app)
      .post('/login')
      .send({ email: 'john@gmail.com', password: '123456789' })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).match(/application\/json/);
    expect(response.status).equal(200);
    expect(response.body.message).equal('This is secure area');
  });
});
