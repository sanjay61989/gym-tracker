import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MembershipFormComponent } from './membership-form/membership-form.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'memberlist',
        component: MemberListComponent,
      },
      {
        path: 'membership',
        component: MembershipFormComponent,
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    MemberListComponent,
    MembershipFormComponent,
    ScheduleComponent,
    MainComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GymModule {}
