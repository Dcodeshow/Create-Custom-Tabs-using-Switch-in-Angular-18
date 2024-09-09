import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  tabs: any = [
    {
      id: 1,
      label: 'Home',
    },
    {
      id: 2,
      label: 'About',
    },
    {
      id: 3,
      label: 'Contact',
    },
  ];
  selectedTab: number = 1;

  selectTab(tabid: number) {
    console.log(tabid);
    this.selectedTab = tabid;
  }
}
