import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkComponent } from './homework.component';
import { HomeworkHeaderComponent } from './homework-header/homework-header.component';
import { HomeworkSmartphoneComponent } from './homework-smartphone/homework-smartphone.component';
import { HomeworkLaptopComponent } from './homework-laptop/homework-laptop.component';
import { HomeworkFooterComponent } from './homework-footer/homework-footer.component';
import { HomeworkCarouselComponent } from './homework-carousel/homework-carousel.component';
import { ModalComponent } from './modal/modal.component';
import { ProductItemComponent } from './product-item/product-item.component';





@NgModule({
  declarations: [HomeworkComponent, HomeworkHeaderComponent,HomeworkCarouselComponent, HomeworkSmartphoneComponent, HomeworkLaptopComponent, HomeworkFooterComponent, ModalComponent, ProductItemComponent],
  exports: [
    HomeworkComponent, HomeworkHeaderComponent,HomeworkCarouselComponent , HomeworkSmartphoneComponent, HomeworkLaptopComponent, HomeworkFooterComponent, ModalComponent, ProductItemComponent],
  imports: [
    CommonModule
  ]
})
export class HomeworkModule { }
