import express, { Request, Response } from 'express';
import assert from 'assert';
import request from 'supertest';
import { expect } from 'chai';
import { HttpError, HttpStatus } from './../src/index';

describe('HttpError tests', function () {
  const app = express();

  app.get('/error', function (req: Request, res: Response) {
    try {
      throw new HttpError('Something wrong', HttpStatus.BadRequest);
    } catch (error) {
      HttpError.json(res, error);
    }
  });

  it('get HttpError.json should return json', async function () {
    const response = await request(app)
      .get('/error')
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).match(/application\/json/);
    expect(response.status).equal(400);
    expect(response.body.message).equal('Something wrong');
  });

  it('get HttpError message should throw Error', function () {
    assert.throws(() => {
      throw new HttpError('Something incorrect');
    }, HttpError);
  });

  it('get HttpError message and statusCode should throw Error', function () {
    assert.throws(() => {
      throw new HttpError('Something incorrect', HttpStatus.BadRequest);
    }, HttpError);
  });
});
