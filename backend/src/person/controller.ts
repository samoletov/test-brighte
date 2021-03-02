import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateReferralDto, PersonDto } from './dto';
import { PersonService } from './service';

@ApiTags('referrals')
@Controller('referrals')
@UseInterceptors(ClassSerializerInterceptor)
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('')
  @ApiOperation({
    summary: 'Get referrals',
  })
  async list(): Promise<PersonDto[]> {
    return await this.personService.list();
  }

  @Post('')
  @ApiOperation({
    summary: 'Create referral',
  })
  async create(@Body() dto: CreateReferralDto): Promise<PersonDto> {
    return await this.personService.create(dto);
  }
}
