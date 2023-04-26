import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { TMoviesRequest } from "../../interfaces/movies.interfaces";

const ensureDataIsValid = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction): void => {

  const validatedData: TMoviesRequest = schema.parse(req.body);

  req.body = validatedData;

  return next();
}

export default ensureDataIsValid;