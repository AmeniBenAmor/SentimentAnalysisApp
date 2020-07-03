import { Component, ViewChild, AfterViewInit, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { EmitType, detach } from '@syncfusion/ej2-base';
import {DataService} from "../data.service";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  files: any = [];
  HW:string;
  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  public test() {
    this.dataService.testApi().subscribe((data : string) => {
        this.HW = data;
        console.log("text",data)
    });}
  constructor(private dataService: DataService) { }

  ngOnInit() {}

}
