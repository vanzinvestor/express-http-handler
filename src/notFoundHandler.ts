import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from './HttpStatus';

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new Error(`Url Not Found - ${req.originalUrl}`);
  res.status(HttpStatus.NotFound);
  next(error);
};
