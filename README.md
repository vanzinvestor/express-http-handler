# http-http-handler

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
} from 'express-http-handler';

const app = expess();

app.get('/test', (req: Request, res: Response) => {
  try {
    if (isErorr) {
      throw new HttpError('Something error', HttpStatus.BadRequest);
    }
  } catch (e: any) {
    HttpError.json(res, e);
  }
});

//At the end of middleware
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(5000, () => {
  console.log('server running on port 5000');
});
```
