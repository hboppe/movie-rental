import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

const ensureDataIsValid = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction): void => {

  const validatedData = schema.parse(req.body);

  req.body = validatedData;

  return next();
}

export default ensureDataIsValid;