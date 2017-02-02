import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    let runs = [
      { id: 1, name: 'Gran Canaria Marathon', date: '22/01/2017' },
      { id: 2, name: 'Cambridge Boundry Marathon', date: '26/02/2017' }
    ];
    let triathlons = [
      { id: 1, name: 'Cardiff Triathlon', date: '25/06/2017' },
      { id: 2, name: 'London Triathlon', date: '23/07/2017' }
    ];
    let cycles = [
      { id: 1, name: 'New Forest Summer Sportive', date: '1/07/2017' },
    ];    
    return { heroes, runs, triathlons, cycles };
  }
}
