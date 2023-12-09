import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const saltrounds = 2;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltrounds,
    );
    const newUser = await this.prisma.user
      .create({
        data: {
          email: createUserDto.email,
          name: createUserDto.name,
          password: hashedPassword,
        },
        select: {
          email: true,
          name: true,
        },
      })
      .catch((error) => {
        throw new BadRequestException();
      });
    return newUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  findReports(email: string) {
    return this.prisma.laporan.findMany({
      where: {
        reporter: {
          email: email,
        },
      },
    });
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  update(email: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name: updateUserDto.name,
      },
      select: {
        email: true,
        name: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
