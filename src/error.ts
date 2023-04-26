import { Request, Response } from "express";
import { ZodError } from "zod";

class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    (this.message = message), (this.statusCode = statusCode);
  }
}

const handleError = (err: Error, req: Request, res: Response) => {

  if(err instanceof AppError){
    return res.status(err.statusCode).json({
      message: err.message
    })
  }

  if(err instanceof ZodError){
    return res.status(400).json(err.flatten().fieldErrors)
  }

  return res.status(500).json({
    message: 'Internal Server Error'
  })
};

export {
  AppError,
  handleError
}
