import { Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './stubs/uset';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtGuard } from './guards/jwt-auth.guard';
import { RoleGuard } from './guards/role.gurd';
import { Authorization } from './guards/authorization.guard';
Request
@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      return await this.authService.login(req.user);
    }
  
    @Get('validate')
    validateUser(username:string,password:string) {
      return this.authService.validateUser({username,password});
    }
    
    @UseGuards(JwtGuard)
    @UseGuards(RoleGuard) // Apply both role and permission guards
    @Authorization(['admin','user'], ['user.create','user.get']) // Combine roles and permissions
    @Get('user-create')
    async createUser(){
      return this.authService.createUser()
    }   
    @Get('user-update')
    async updateUser(){
      return this.authService.createUser()
    } 
    @Get('user-get')
    async getUser(){
      return this.authService.createUser()
    }
    @Get('user-get-all')
    async getUsers(){
      return this.authService.createUser()
    }
}
