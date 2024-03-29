import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

import { LocalStrategy } from './strategies/local-strategy';
import { JwtStrategy } from './strategies/jwt-strategy';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';
import config from 'config';

@Module({
  providers: [AuthService,LocalStrategy,JwtStrategy,RefreshJwtStrategy],
  controllers: [AuthController],
  imports:[JwtModule.register({
    secret:config.auth.secretAccessToken,
    signOptions:{
      expiresIn:"3600s"
    }
  })]
})
export class AuthModule {}
