import { Component } from '@angular/core';
import { EventService } from '../EventService';

@Component({
  selector: 'app-membership-form',
  templateUrl: './membership-form.component.html',
  styleUrl: './membership-form.component.css',
})
export class MembershipFormComponent {
  constructor(private eventService: EventService) {
    this.eventService.emitEvent(
      new CustomEvent('dataFromRemote', {
        detail: 'Hello from remote MFE member forms**',
      })
    );
    console.log('dispatched form');
  }
}
