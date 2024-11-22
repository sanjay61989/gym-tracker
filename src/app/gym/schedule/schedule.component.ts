import { Component } from '@angular/core';
import { EventService } from '../EventService';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  constructor(private eventService: EventService) {}
  ngOnInit() {
    this.eventService.events$.subscribe((event: CustomEvent) => {
      console.log('Received event from remote:', event.detail);
    });
  }
}
