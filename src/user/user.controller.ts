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
  HttpException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, newUser, userReport } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: newUser,
  })
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      throw new HttpException('Bad Request', 400);
    }
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
  @ApiOkResponse({
    description: 'The record has been successfully retrieved.',
    type: userReport,
    isArray: true,
  })
  findreports(@Request() req) {
    return this.userService.findReports(req.user.email);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch()
  @ApiBody({ type: UpdateUserDto })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: newUser,
  })
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
