import { Component, OnInit } from '@angular/core';

import { SportEvent } from './sportevent';
import { RunningService } from './running.service';
import { CyclingService } from './cycling.service';
import { TriathlonService } from './triathlon.service';

@Component({
    moduleId: module.id,
    selector: 'runningtodo',
    templateUrl: 'runningtodo.component.html',
    styleUrls: ['runningtodo.component.css'],
    host: {'class': 'componentflex'}
})

export class RunningToDoComponent implements OnInit {

    runs: SportEvent[] = [];
    cycles: SportEvent[] = [];
    triathlons: SportEvent[] = [];
    selectedEvent: SportEvent;

    constructor(private runningService: RunningService, private cyclingService: CyclingService, private triathlonService: TriathlonService) { }

    ngOnInit(): void {
        this.runningService.get()
            .then(events => this.runs = events);
        this.cyclingService.get().then(events => this.cycles = events);
        this.triathlonService.get().then(events => this.triathlons = events);

    }

   onSelect(event: SportEvent): void {
    this.selectedEvent = event;    
  }
}
