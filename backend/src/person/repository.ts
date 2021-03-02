import { EntityRepository, Repository } from 'typeorm';

import { Person } from './entity';

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {}
