import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabPanelComponent } from '../Tabs/tab-panel.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
})
export class TabGroupComponent implements OnInit {
  tabPanelList: TabPanelComponent[] = [];

  @Input() tabActiveIndex = 0;
  @Output() tabActiveChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
    this.tabActiveChange.emit(idx);
  }

  addTabPanel(tab: TabPanelComponent) {
    this.tabPanelList = [...this.tabPanelList, tab];
  }
  removeTabPanel(tab: TabPanelComponent) {
    let index = -1;
    // const tabPanelList: TabPanelComponent[] = [];
    // this.tabPanelList.forEach((item, idx) => {
    //   if (tab === item) {
    //     index = idx;
    //     return;
    //   }

    //   // console.log(item);
    //   tabPanelList.push(item);
    // });
    // this.tabPanelList = tabPanelList;
    // if (index !== -1) {
    //   this.selectItem(0);
    // }
    this.tabPanelList = this.tabPanelList.filter((tb, idx) => {
      if (tb === tab) {
        index = idx;
        return false;
      }
      return true;
    });

    if (index === this.tabActiveIndex) {
      this.tabActiveChange.emit(
        index === this.tabPanelList.length ? index - 1 : index
      );
    }
  }
}
