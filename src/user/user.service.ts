import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model, SortOrder } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor( 
    @InjectModel(User.name)
    private  userModel: Model<User>){}

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto);
  }

  async findAll(limit:number, offset: number, sort: number) {
    const users = await this.userModel.find().limit(limit).skip(offset).sort({_id: sort  as SortOrder});
    return users;
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true});
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
