import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { IUser, userStub } from './stubs/uset';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwt: JwtService) {}
    async login(userDto: any): Promise<any> {
        const user: IUser = userStub().find((e) => e.username == userDto.username);
        console.log({ user });
        const payload = {
            userName: user.username,
            sub: {
                role: user.roles,
            },
        };
        return {
            ...user,
            accessToken: this.jwt.sign(payload),
        };
    }
    async validateUser(userDto: any): Promise<any> {
        console.log({ userDto });
        const user = userStub().find((e) => e.username == userDto.username);
        if (!user) throw new HttpException('user not found', HttpStatus.NOT_FOUND);
        //check password
        const passMatch = user.password == userDto.password;
        if (!passMatch) throw new HttpException('Wrong credential', HttpStatus.BAD_REQUEST);
        return user;
    }
    async findUserByUserName(username: string): Promise<any> {
        return userStub().find((e) => e.username == username);
    }

    async createUser(): Promise<string> {
        return 'create user';
    }
    async updateUser(): Promise<string> {
        return 'update user';
    }
    async getUser(): Promise<string> {
        return 'get user';
    }
    async getUsers(): Promise<string> {
        return 'get users';
    }
}
