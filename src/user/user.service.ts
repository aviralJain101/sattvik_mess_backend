import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    messNumber: number,
  ) {

    // @TODO shift to crypted password

    const newUser = new this.userModel({
      firstName,
      lastName,
      email,
      password,
      messNumber,
    });

    const result = await newUser.save();
    return result;
  }

  async getAllUsers() {
    const users = await this.userModel.find().exec();
    return users;
  }

  async getUser(userId: string) {
    const user = await this.findUser(userId);
    return user;
  }

  async updateUser(
    userId: string,
    firstName: string,
    lastName: string,
    password: string,
    messNumber: number,
  ) { 

    const updatedUser = await this.findUser(userId);
    if (firstName) {
      updatedUser.firstName = firstName;
    }
    if (lastName) {
      updatedUser.lastName = lastName;
    }
    if (password) {

      // @TODO recieve previous password and new password
      // @TODO check if password matches
      // @TODO update accordingly  
      
      updatedUser.password = password;
    }
    if (messNumber) {
      updatedUser.messNumber = messNumber;
    }
    updatedUser.save();
  }

  async deleteUser(userId: string) {
    try {
      await this.userModel.findOneAndDelete({ _id: userId });
    } catch (error) {
      throw new NotFoundException('Could not find the user.');
    }
  }

  private async findUser(id: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findOne({ _id: id });
    } catch (error) {
      throw new NotFoundException('Could not find the user');
    }
    if (!user) {
      throw new NotFoundException('Could not find the user');
    }
    return user;
  }
}
