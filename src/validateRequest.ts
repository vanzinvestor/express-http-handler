import { AnyObject, ObjectSchema } from 'yup';
import { Request, Response, NextFunction } from 'express';

export const validateRequest =
  (schema: ObjectSchema<AnyObject>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        file: (<any>req).file,
      });

      next();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      res.status(400).json({ message: e.errors[0] });
    }
  };
