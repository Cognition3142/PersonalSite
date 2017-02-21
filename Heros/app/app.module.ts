import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import './rxjs-extensions';

import { AppComponent }         from './app.component';
import { RunningToDoComponent } from './components/runningtodo.component';
import { SportEventComponent }  from './components/sportevent.component';
import { CurriculumVitaeComponent } from './components/curriculum-vitae.component';

import { RunningService }       from './services/running.service';
import { CyclingService }       from './services/cycling.service';
import { TriathlonService }     from './services/triathlon.service';



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
    RunningToDoComponent,
    SportEventComponent,
    CurriculumVitaeComponent
  ],
  providers: [ RunningService, CyclingService, TriathlonService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
