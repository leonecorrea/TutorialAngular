import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const aplicativos = [
      { id: 10, nome: 'Uber' },
      { id: 11, nome: 'Google Maps'},
      { id: 12, nome: 'Facebook'},
      { id: 13, nome: 'WhatsApp'},
      { id: 14, nome: 'Google Maps'},
      { id: 15, nome: 'Google Maps'},
      { id: 16, nome: 'Google Maps'},
      { id: 17, nome: 'Google Maps'}
    ]
    return {aplicativos};
  }
}
