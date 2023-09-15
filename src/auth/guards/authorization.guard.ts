import { SetMetadata } from '@nestjs/common';

export const Authorization = (roles: string[], permissions: string[]) => {
  return SetMetadata('authorization', { roles, permissions });
};
