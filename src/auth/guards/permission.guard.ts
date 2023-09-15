// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';

// @Injectable()
// export class RoleGuard implements CanActivate {
//   constructor(private readonly reflector: Reflector) {}

//   canActivate(context: ExecutionContext): boolean {
//     const authorization = this.reflector.get<{ roles: string[]; permissions: string[] }>('authorization', context.getHandler());

//     if (!authorization) {
//       return true; // No authorization metadata is specified, allow access by default
//     }

//     const user = context.switchToHttp().getRequest().user;

//     // Check if the user has at least one of the required roles
//     const hasRequiredRole = user.roles.some((role) => authorization.roles.includes(role));

//     if (!hasRequiredRole) {
//       return false; // User does not have the required role
//     }

//     // Check if the user has all the required permissions
//     const hasRequiredPermission = authorization.permissions.every((permission) => user.permissions.includes(permission));

//     return hasRequiredPermission;
//   }
// }
