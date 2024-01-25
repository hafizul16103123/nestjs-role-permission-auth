import {
  HttpException,
  HttpStatus,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { IUser, userStub } from './stubs/uset';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from './guards/jwt-auth.guard';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}
  async login(userDto: any) {
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
  async validateUser(userDto: any) {
    console.log({ userDto });
    const user = userStub().find((e) => e.username == userDto.username);
    if (!user) throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    //check password
    const passMatch = user.password == userDto.password;
    if (!passMatch)
      throw new HttpException('Wrong credential', HttpStatus.BAD_REQUEST);
    return user;
  }
  async findUserByUserName(username: string) {
    return userStub().find((e) => e.username == username);
  }

  async createUser() {
    return 'create user';
  }
  async updateUser() {
    return 'update user';
  }
  async getUser() {
    return 'get user';
  }
  async getUsers() {
    return 'get users';
  }
}
