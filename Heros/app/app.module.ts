import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { PdfViewerComponent } from 'ng2-pdf-viewer';
// import { Marked } from 'marked';
// import { MarkdownModule } from 'angular2-markdown';

import './rxjs-extensions';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { RunningToDoComponent } from './runningtodo.component';
import { SportEventComponent }  from './sportevent.component';
import { CurriculumVitaeComponent } from './curriculum-vitae.component';

import { HeroService }          from './hero.service';
import { RunningService }       from './running.service';
import { CyclingService }       from './cycling.service';
import { TriathlonService }     from './triathlon.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    MaterialModule.forRoot(),
    // Marked
    // MarkdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    RunningToDoComponent,
    SportEventComponent,
    CurriculumVitaeComponent,
    PdfViewerComponent
  ],
  providers: [ HeroService, RunningService, CyclingService, TriathlonService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
