import { Component, Inject, Input, OnInit } from '@angular/core';
import { NewoneService } from './newone.service';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css'],
  providers: [
    {
      provide: 'data1',
      useClass: NewoneService,
    },
    {
      provide: 'data2',
      useClass: NewoneService,
    },
  ],
})
export class NewoneComponent {
  @Input() name;
  @Input() name2;
  constructor(
    @Inject('data1') private data: NewoneService,
    @Inject('data2') private data2: NewoneService
  ) {}

  addItem(name: string): void {
    this.data.addItem(name);
  }

  addItem2(name: string): void {
    this.data2.addItem(name);
  }

  get items(): Array<string> {
    return this.data.items;
  }

  get items2(): Array<string> {
    return this.data2.items;
  }

  getItems(): Array<string> {
    return this.data.items;
  }

  getItems2(): Array<string> {
    return this.data2.items;
  }
}
