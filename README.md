# express-http-handler

Express error handler and http status code and validate request

## Install

```bash
npm install express-http-handler
```

## Use

```ts
import express, { Request, Response } from 'express';
import {
  errorHandler,
  HttpError,
  HttpStatus,
  notFoundHandler,
  validateRequest,
} from 'express-http-handler';
import { object, string } from 'yup';

const app = expess();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req: Request, res: Response) => {
  try {
    const somethingWrong = true;

    if (somethingWrong) {
      throw new HttpError('Something error', HttpStatus.BadRequest);
    }
    // ...
  } catch (error: any) {
    HttpError.json(res, error);
  }
});

const userLoginSchema = object({
  body: object({
    email: string().email('Email is invalid').required('Email is required'),
    password: string().required('Password is required'),
  }),
  // query: ,
  // params: ,
  // file: ,
});

app.post(
  '/login',
  validateRequest(userLoginSchema),
  (req: Request, res: Response) => {
    try {
      const somethingWrong = true;

      if (somethingWrong) {
        throw new HttpError('Something error', HttpStatus.BadRequest);
      }
      // ...
    } catch (error: any) {
      HttpError.json(res, error);
    }
  }
);

//At the end of middleware
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(5000, () => {
  console.log('server running on port 5000');
});
```

## Credit and Thanks

Thanks to [RWOverdijk](https://gist.github.com/RWOverdijk/6cef816cfdf5722228e01cc05fd4b094) for compiling the http status code.
