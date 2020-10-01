import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../shared/services/item.service';
import {Item} from '../../../model/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  item: Item;

  constructor(
    public itemService: ItemService,
  ) {
  }

  ngOnInit(): void {
    this.getAllItem();
  }

  getAllItem(): void {
    this.itemService.getAllItem();
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(
      (data) => {
        this.getAllItem();
      }
    );
  }

  editItem(item): void {
    console.log(item);
    this.itemService.currentItem = Object.assign({}, item);
  }
}
