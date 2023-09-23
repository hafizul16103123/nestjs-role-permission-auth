import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import config from 'src/config';
import { AuthService } from '../auth.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector,private jwt:JwtService,private authSeervice:AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const authorization = this.reflector.get<{ roles: string[]; permissions: string[] }>('authorization', context.getHandler());

    if (!authorization) {
      return true; // No authorization metadata is specified, allow access by default
    }

    // const user = context.switchToHttp().getRequest().user;
    // console.log({user})
    const request =context.switchToHttp().getRequest()
    // console.log({request})
    const au = request.headers.authorization
    const token =au.split(" ")[1]
    const secretKey =config.auth.secretAccessToken
    const decode = this.jwt.verify(token, {
    secret:secretKey
    })
    console.log({decode})

    const user:any = await this.authSeervice.findUserByUserName(decode.userName)
   
    request.user=user
    // Check if the user has at least one of the required roles
    const hasRequiredRole = user.roles.some((role) => authorization.roles.includes(role));

    if (!hasRequiredRole) {
      return false; // User does not have the required role
    }

    // Check if the user has all the required permissions
    const hasRequiredPermission = user.permissions.every((permission) => user.permissions.includes(permission));

    // if (!hasRequiredPermission) {
    //   return false; // User does not have the required role
    // }
    return hasRequiredPermission
  }
}
