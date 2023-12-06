import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BankAccountService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBankAccountDto: CreateBankAccountDto) {
    return 'This action adds a new bankAccount';
  }

  findAll() {
    return `This action returns all bankAccount`;
  }

  findOne(id: string) {
    return this.prisma.rekening.findUnique({
      where: {
        nomor_rekening: id,
      },
      select: {
        laporan: {
          select: {
            title: true,
            createdAt: true,
          },
        },
      },
    });
  }

  update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    return `This action updates a #${id} bankAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
