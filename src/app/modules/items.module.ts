import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemService} from './shared/services/item.service';
import {FormsModule} from '@angular/forms';
// import {ItemsListComponent} from './components/items-list/items-list.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemComponent } from './components/item/item.component';
import {ItemsListComponent} from './components/items-list/items-list.component';
import { BubblesComponent } from './components/bubbles/bubbles.component';

@NgModule({
  declarations: [ItemFormComponent, ItemComponent, ItemsListComponent, BubblesComponent],
  exports: [ItemFormComponent, ItemComponent, ItemsListComponent, BubblesComponent],
  providers: [ItemService],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ItemsModule { }
