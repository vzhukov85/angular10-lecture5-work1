import { Component, Injectable } from '@angular/core';

@Injectable()
export class NewoneService {
  items: Array<string>;
  count = 0;
  constructor() {
    this.items = ['Apple iPhone XR', 'Samsung Galaxy S9', 'Nokia 9'];
    this.count = this.items.length;
  }

  addItem(name: string): void {
    this.items.push(name);
    this.count += 1;
  }
}
