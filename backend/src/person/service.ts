import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationService } from 'src/notify/service';
import { Repository } from 'typeorm';

import { IPerson } from '../interfaces';
import { Person } from './entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    private notificationService: NotificationService,
  ) {}

  async list(): Promise<Person[]> {
    return this.personRepository.find({});
  }

  async create(person: IPerson): Promise<Person> {
    try {
      const result = await this.personRepository.save(person);
      try {
        await this.notificationService.personRegistration(result);
      } catch (e) {
        // TODO: catching error and processing it. Now this service can be unavailable
      }
      return result;
    } catch (error) {
      console.error('Create person failure', person, error);
      throw error;
    }
  }
}
