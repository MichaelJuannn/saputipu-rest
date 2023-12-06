import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReportService {
  constructor(private readonly prisma: PrismaService) {}
  create(createReportDto: CreateReportDto) {
    return this.prisma.laporan.create({
      data: {
        nomor_rekening: {
          connectOrCreate: {
            where: { nomor_rekening: createReportDto.account_number },
            create: { nomor_rekening: createReportDto.account_number },
          },
        },
        reporter: {
          connect: { id: +createReportDto.user_id },
        },
        title: createReportDto.title,
        body: createReportDto.description,
        evidence: createReportDto.evidence,
      },
    });
  }

  findAll() {
    return `This action returns all report`;
  }

  findOne(id: string) {
    return this.prisma.laporan.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: string) {
    return this.prisma.laporan.delete({
      where: {
        id: id,
      },
    });
  }
}
