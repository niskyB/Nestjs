/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

// class middleware

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}

// function middleware

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request...');
  next();
}

// use function middleware any time your middleware doesn't need any dependencies
