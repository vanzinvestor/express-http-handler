import { Request, Response, NextFunction } from 'express';

export const requiresLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = (<any>req).user;

  if (!user) {
    return res.status(403).json({ message: 'Access is forbidden' });
  }

  next();
};
