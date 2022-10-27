import { Component, Input, TemplateRef, ViewChild } from "@angular/core"
import { TabGroupComponent } from "../Tabs/tab-gruop.component";

@Component({
  selector : 'app-tab-panel',
  template : 
  '<ng-template><ng-content></ng-content></ng-template>'
})

export class TabPanelComponent{
  @Input() title : string;
  @ViewChild(TemplateRef,{static : true }) panelBody : TemplateRef<unknown>;
  constructor(private tabGroup: TabGroupComponent){

  }
  ngOnInit(){
    this.tabGroup.addTabPanel(this)
  }
}