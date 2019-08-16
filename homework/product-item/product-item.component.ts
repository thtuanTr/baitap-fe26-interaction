import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem;
  @Output() emitItem = new EventEmitter();

  isHide:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  detailProduct(){
    this.emitItem.emit(this.productItem);
  }

  hideDes() {
    this.isHide = !this.isHide;
  }
}
