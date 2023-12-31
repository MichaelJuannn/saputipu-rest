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
    return this.prisma.rekening.findMany();
  }

  async findOne(id: string) {
    const data = await this.prisma.rekening.findUnique({
      where: {
        nomor_rekening: id,
      },
      select: {
        laporan: {
          select: {
            id: true,
            title: true,
            createdAt: true,
          },
        },
      },
    });
    if (!data) {
      return {
        message: 'Tidak Ada Laporan Untuk Nomor Rekening Ini',
      };
    }
    return data;
  }

  update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    return `This action updates a #${id} bankAccount`;
  }

  remove(id: string) {
    return this.prisma.rekening.delete({
      where: {
        nomor_rekening: id,
      },
    });
  }
}
