import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  productItem: any;

  getList(productItem) {
    this.productItem = productItem;
  }
  constructor() { }

  ngOnInit() {
  }

}
