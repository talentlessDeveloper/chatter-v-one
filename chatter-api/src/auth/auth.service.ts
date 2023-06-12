import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from 'src/dto/signUpDto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from 'src/dto/loginDto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { firstName, lastName, email, password, role } = signUpDto;
    console.log(email, '123');
    if (!email) {
      throw new UnauthorizedException('user email is required to sign up');
    }
    if (!password) {
      throw new UnauthorizedException('user password is required to sign up');
    }
    if (!firstName) {
      throw new UnauthorizedException('user firstName is required to sign up');
    }
    if (!lastName) {
      throw new UnauthorizedException('user lastName is required to sign up');
    }
    if (!role) {
      throw new UnauthorizedException('Role is required');
    }
    const isExist = await this.userModel.findOne({ email });
    if (isExist?.email === email) {
      throw new UnauthorizedException('user already exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      firstName,
      lastName,
      email,
      role,
      password: hashPassword,
    });

    const token = this.jwtService.sign({
      id: user.id,
      name: user.email,
      role: user.role,
    });
    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string; user: any }> {
    const { password, email } = loginDto;

    if (!email) {
      throw new UnauthorizedException('invalid email and password');
    }

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('invalid email and password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('invalid email and password');
    }

    const token = this.jwtService.sign({
      id: user.id,
      name: user.email,
    });
    return { token, user };
  }
}
