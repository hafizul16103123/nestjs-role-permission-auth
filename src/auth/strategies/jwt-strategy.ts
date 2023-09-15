import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import config from 'src/config';
import { AuthService } from '../auth.service';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService:AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${config.auth.secretAccessToken}`,
    });
  }

  async validate(payload: any) {
    // const user = this.authService.findUserByUserName(payload.username)
    // const request = payload.request;
    // if (request) {
    //   request.user = user;
    // }
    return { user: payload.sub, username: payload.username };
  }
}
