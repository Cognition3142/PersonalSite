import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <div class="rootdiv">
  <div class="mainnavbar">
  <h1 class="name">{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <a routerLink="/runningtodo" routerLinkActive="active">Endurance</a>
    <a routerLink="/adventures" routerLinkActive="active">Adventures</a>
    <a routerLink="/svgicons" routerLinkActive="active">SVG Icons</a>
  </nav>
  </div>
  <div class="fill-area content flexbox-item-grow">
  <router-outlet></router-outlet>
  </div>
  </div>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Elliot Wilkinson';
}
