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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('myprofile')
  findOne(@Request() req) {
    return this.userService.findOne(req.user.email);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('myreport')
  findreports(@Request() req) {
    return this.userService.findReports(req.user.email);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch()
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(req.user.email, updateUserDto);
  }

  /*   @Get()
    findAll() {
      return this.userService.findAll();
    } */

  /*   @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  } */
}
