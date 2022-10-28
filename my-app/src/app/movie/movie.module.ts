import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CategoryComponent } from './category/category.component';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [
    TitleComponent,
    CategoryComponent,
    RatingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieModule { }
