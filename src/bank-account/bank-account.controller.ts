import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { ApiOkResponse, ApiProperty, ApiTags } from '@nestjs/swagger';

class SmallReport {
  @ApiProperty()
  title: string;
  @ApiProperty()
  createdAt: Date;
}
class BankAccount {
  @ApiProperty({ type: [SmallReport] })
  laporan: SmallReport[];
}
@ApiTags('bank-account')
@Controller('bank-account')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Get(':id')
  @ApiOkResponse({ type: BankAccount })
  findOne(@Param('id') id: string) {
    return this.bankAccountService.findOne(id);
  }

  /*   @Post()
  create(@Body() createBankAccountDto: CreateBankAccountDto) {
    return this.bankAccountService.create(createBankAccountDto);
  } */

  // @Get()
  // findAll() {
  //   return this.bankAccountService.findAll();
  // }

  /*   @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBankAccountDto: UpdateBankAccountDto,
  ) {
    return this.bankAccountService.update(+id, updateBankAccountDto);
  } */

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bankAccountService.remove(id);
  // }
}
