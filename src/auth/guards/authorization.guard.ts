import { SetMetadata } from '@nestjs/common';

export const Authorization = (roles: string[], permissions: string[]):any => {
  return SetMetadata('authorization', { roles, permissions });
};
