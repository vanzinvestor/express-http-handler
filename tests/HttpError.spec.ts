import assert from 'assert';
import { HttpError, HttpStatus } from './../src/index';

describe('HttpError tests', function () {
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
