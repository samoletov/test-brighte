import { ApiProperty } from '@nestjs/swagger';

import { IPerson } from '../interfaces';

export class PersonDto implements IPerson {
  @ApiProperty()
  id: number;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  street: string;
  @ApiProperty()
  suburb: string;
  @ApiProperty()
  state: string;
  @ApiProperty()
  postcode: string;
  @ApiProperty()
  country: string;
}

export class CreateReferralDto implements IPerson {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  street: string;
  @ApiProperty()
  suburb: string;
  @ApiProperty()
  state: string;
  @ApiProperty()
  postcode: string;
  @ApiProperty()
  country: string;
}
