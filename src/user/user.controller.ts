import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('messNumber') messNumber: number,
  ) {
    const user = await this.userService.createUser(
      firstName,
      lastName,
      email,
      password,
      messNumber,
    );
    return user as User;
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers();
    return users;
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.userService.getUser(userId);
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('password') password: string,
    @Body('messNumber') messNumber: number,
  ) {
    await this.userService.updateUser(
      userId,
      firstName,
      lastName,
      password,
      messNumber,
    );
    return null;
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string) {
    await this.userService.deleteUser(userId);
    return null;
  }
}
