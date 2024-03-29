import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homework-laptop',
  templateUrl: './homework-laptop.component.html',
  styleUrls: ['./homework-laptop.component.scss']
})
export class HomeworkLaptopComponent implements OnInit {
  @Output() emitList = new EventEmitter;

  arrLapTop:Array<any> = [
    {name: 'MACBOOK', img:'lt_macbook.png', des: 'The MacBook is a brand of notebook computers manufactured by Apple Inc', price: '1000'},
    {name: 'ASUS ROG', img:'lt_rog.png', des: 'the Asus ROG Strix Flare is the latest addition to Asus lineup of ROG branded devices', price: '800'},
    {name: 'HP OMEN', img:'lt_hp.png', des: 'A young global smartphone brand focusing on introducing perfect sound quality', price: '1000'},
    {name: 'LENOVO THINKPAD', img:'lt_lenovo.png', des: 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012', price: '700'}
  ];


  constructor() { }

  ngOnInit() {
  }

  getItem(productItem) {
    this.emitList.emit(productItem);
  }

}
