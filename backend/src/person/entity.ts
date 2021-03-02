import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  street: string;

  @Column()
  suburb: string;

  @Column()
  state: string;

  @Column()
  postcode: string;

  @Column()
  country: string;
}
