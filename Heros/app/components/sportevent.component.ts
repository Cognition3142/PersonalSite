import { Component, OnInit, Input  } from '@angular/core';

import { SportEvent } from '../models/sportevent';
import { RunningService } from '../services/running.service';
import { CyclingService } from '../services/cycling.service';
import { TriathlonService } from '../services/triathlon.service';

@Component({
    moduleId: module.id,
    selector: 'sportevent',
    templateUrl: 'sportevent.component.html',
    styleUrls: ['sportevent.component.css']
})

export class SportEventComponent implements OnInit {
    @Input() sportevent: SportEvent;

    constructor(private runningService: RunningService, private cyclingService: CyclingService, private triathlonService: TriathlonService) { }

    ngOnInit(): void {


    }

}
