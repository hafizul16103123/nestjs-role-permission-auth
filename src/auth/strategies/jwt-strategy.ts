import { PassportStrategy } from '@nestjs/passport';
import config from 'config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: `${config.auth.secretAccessToken}`,
        });
    }

    async validate(payload: any): Promise<{ user: string; username: string }> {
        // const user = this.authService.findUserByUserName(payload.username)
        // const request = payload.request;
        // if (request) {
        //   request.user = user;
        // }
        return { user: payload.sub, username: payload.username };
    }
}
