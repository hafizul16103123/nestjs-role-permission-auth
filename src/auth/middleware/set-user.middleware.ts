// middleware/set-user.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../auth.service';

@Injectable()
export class SetUserMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // console.log({req})
    // if (req.user && req.user.id) {
    //   // Assuming you have a service (AuthService) that fetches user data based on user ID
    //   req.user = await this.authService.getUserData(req.user.id);
    // }

    next();
  }
}
