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
      {
        id: 1, name: 'Gran Canaria Marathon', date: '22/01/2017',
        website: 'http://grancanariamaraton.com/web/en/',
        strava: 'https://www.strava.com/activities/840707807',
        description: 'Marathon around Las Palmas de Gran Canaria - dubbed Europe\'s Warmest Winter Marathon. My first road marathon and first of 2017. Great chance to escape England\'s cold Janurary weather!',
        complete: true,
        racereport: 'TODO',
        img: '../assets/img/GranCanariaFinish.jpg'
      },
      {
        id: 2, name: 'Cambridge Boundry Marathon', date: '26/02/2017',
        website: 'http://www.cuhh.org.uk/competition/boundaryrun/',
        description: 'Marathon hosted by the University of Cambridge Cross-Country Running Club, "Hare & Hounds". A bargin at £12 - time to save for the next abroad marathon!',
        complete: false,
      }
    ];
    let triathlons = [
      {
        id: 1, name: 'Cardiff Triathlon', date: '25/06/2017',
        website: 'http://alwaysaimhighevents.com/cardiff-triathlon/cardiff-triathlon-home/',
        description: 'My first Triathlon and I will be doing it with my sister and her friends! (Remember to do some swimming training!!!!)',
        complete: false,
      },
      {
        id: 2, name: 'London Triathlon', date: '23/07/2017',
        website: 'http://livetotri.co.uk/london-triathlon/',
        description: 'After setting my benchmark time in Cardiff, I will be hoping to improve in my home city.',
        complete: false,
      }
    ];
    let cycles = [
      {
        id: 1,
        name: 'New Forest Summer Sportive',
        date: '1/07/2017',
        website: 'https://www.ukcyclingevents.co.uk/events/new-forest-summer-sportive/',
        description: '99 mile ride through the New Forest National Park',
        complete: false,
        racereport: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor metus, egestas sit amet massa malesuada, mattis mattis ligula. Proin pharetra ultricies porttitor. Duis a magna luctus, bibendum arcu ut, hendrerit magna. Aenean iaculis lacinia lacinia. Curabitur facilisis lobortis ante, at aliquam mauris iaculis nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris magna diam, porta vitae ipsum a, euismod sodales leo. Donec viverra sit amet orci quis sollicitudin. Aliquam ac lacus nec nulla consectetur tristique.Aliquam erat volutpat. Phasellus vel blandit sem. Ut ac odio leo. Proin pellentesque vestibulum lacinia. Aenean vitae eros odio. Nulla metus justo, laoreet id risus vel, ultricies lobortis ante. Vestibulum nec pellentesque arcu. In imperdiet dictum convallis. Nam lobortis vitae ipsum ac pharetra. In hendrerit massa et rutrum rhoncus. Morbi ut mollis lectus, vel viverra urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus hendrerit interdum lorem in mattis.'
      },
    ];
    return { heroes, runs, triathlons, cycles };
  }
}
