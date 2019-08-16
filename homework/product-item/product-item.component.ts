import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem;
  @Output() emitFromItem = new EventEmitter;

  isShown = true;

  clickDetailBtn() {
    this.emitFromItem.emit(this.productItem)
  }

  hideDes() {
    this.isShown = !this.isShown;
  }

  constructor() { }

  ngOnInit() {
  }

}
