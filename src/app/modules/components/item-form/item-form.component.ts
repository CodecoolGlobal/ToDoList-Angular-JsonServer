import {Component, OnInit} from '@angular/core';
import {Item} from '../../../model/item.model';
import {ItemService} from '../../shared/services/item.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    public itemService: ItemService
  ) {
  }

  ngOnInit(): void {
  }

  createOrUpdateItem(currentItem: Item): void {
    if (currentItem.id === null) {
      this.createItem(currentItem);
    } else {
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
