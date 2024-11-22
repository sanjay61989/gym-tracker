import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Ensure it's provided in the root scope for singleton behavior
})
export class EventService {
  // ReplaySubject with a buffer size of 1 to replay the latest event to new subscribers
  private eventSubject = new ReplaySubject<CustomEvent>(5);

  // Observable for other components/modules to subscribe to
  public events$ = this.eventSubject.asObservable();

  // Method to emit an event
  emitEvent(event: CustomEvent) {
    this.eventSubject.next(event);
  }
}
