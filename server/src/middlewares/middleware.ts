import { Request, Response, NextFunction } from 'express';

class Validate {
  public fieldTitle(req: Request, res: Response, next: NextFunction): void {
    const { body } = req;

    if (body.title === undefined) {
      res.status(400).json({ message: 'The field "title" is required' });
    }

    if (body.title === '') {
      res.status(400).json({ message: 'title cannot be empty' });
    }

    next();
  }

}

const validate = new Validate();
export { validate };
