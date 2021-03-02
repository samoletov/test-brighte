import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { IPerson } from 'src/interfaces';

@Injectable()
export class NotificationService {
  private client: AxiosInstance;
  constructor() {
    // TODO: move settings tot env
    this.client = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  }

  async personRegistration(person: IPerson) {
    try {
      await this.client.post('/posts', person);
    } catch (error) {
      console.error('Person registration failure', person, error);
      throw error;
    }
  }
}
