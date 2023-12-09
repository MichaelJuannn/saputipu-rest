import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { userReport } from 'src/user/dto/create-user.dto';

class Message {
  @ApiProperty({ example: 'Laporan berhasil dibuat' })
  message: string;
}
@ApiBearerAuth()
@ApiTags('report')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @UseGuards(AuthGuard)
  @Post()
  @ApiCreatedResponse({ type: Message })
  create(@Body() createReportDto: CreateReportDto, @Request() req) {
    return this.reportService.create(req.user.email, createReportDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: userReport })
  findOne(@Param('id') id: string) {
    return this.reportService.findOne(id);
  }

  /*   @Get()
  findAll() {
    return this.reportService.findAll();
  } */

  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    return this.reportService.update(+id, updateReportDto);
  } */

  /*   @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportService.remove(id);
  } */
}
