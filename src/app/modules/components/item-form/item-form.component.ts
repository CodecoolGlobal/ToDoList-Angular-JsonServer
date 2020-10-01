import {Component, OnInit} from '@angular/core';
import {Item} from '../../../model/item.model';
import {ItemService} from '../../shared/services/item.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  constructor(
    public itemService: ItemService
  ) {
  }

  getAllItem(): void {
    this.itemService.getAllItem();
  }

  createOrUpdateItem(currentItem: Item): void {
    if (currentItem.id === null) {
      // this.createItem(currentItem);
      this.itemService.createItem(currentItem).subscribe(
        (data) => {
          this.itemService.getAllItem();
        }
      );
    } else {
      this.itemService.updateItem(currentItem).subscribe(
        (data) => {
          this.itemService.getAllItem();
        }
      );
      this.updateItem(currentItem);
    }
  }

  createItem(item: Item): void {
    this.itemService.createItem(item).subscribe();
  }

  updateItem(item: Item): void {
    this.itemService.updateItem(item).subscribe();
  }

  clear(): void {
    this.itemService.currentItem = {
      id: null,
      title: '',
      status: ''
    };
  }
}
