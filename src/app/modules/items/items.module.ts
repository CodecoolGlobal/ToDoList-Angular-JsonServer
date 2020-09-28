import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemService} from '../shared/services/item.service';
import {FormsModule} from '@angular/forms';
import {ItemsListComponent} from './items-list/items-list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ItemComponent, ItemsListComponent],
  exports: [ItemComponent, ItemsListComponent],
  providers: [ItemService],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ItemsModule { }
