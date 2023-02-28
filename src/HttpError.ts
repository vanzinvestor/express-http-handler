import { Response } from 'express';
import { HttpStatus } from './HttpStatus';

class HttpError {
  private statusCode?: HttpStatus;
  private message?: string;
  private stack?: string = new Error().stack;
  private timestamp: Date = new Date();

  constructor(message: string, statusCode?: HttpStatus) {
    this.statusCode = statusCode;
    this.message = message;
    process.env.NODE_ENV !== 'production' && this.stack;
    this.timestamp;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static json(res: Response, err: any, statusCode?: HttpStatus) {
    return res
      .status(err.statusCode || statusCode || res.statusCode || 500)
      .json({
        status: err.statusCode || statusCode || res.statusCode || 500,
        message: err.message || HttpStatus[HttpStatus.InternalServerError],
        timestamp: err.timestamp || new Date(),
        stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined,
      });
  }
}

export default HttpError;
