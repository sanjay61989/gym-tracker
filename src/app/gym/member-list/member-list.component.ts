import { Component } from '@angular/core';
import { DataSharingService } from '../../DataSharing.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
})
export class MemberListComponent {
  sharedData: any;
  newDataKey = 'user';

  constructor(private dataSharingService: DataSharingService) {

  }
  fetchSharedData(key: string) {
    this.dataSharingService.getData(key).subscribe(
      (data) => {
        this.sharedData = data;
        console.log('Retrieved shared data:', this.sharedData);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
