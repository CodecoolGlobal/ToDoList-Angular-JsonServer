import { Component, OnInit } from '@angular/core';
import {Item} from '../../../model/item.model';
import {ItemService} from '../../shared/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    public itemService: ItemService
  ){ }

  ngOnInit(): void {
  }

  createOrUpdateItem(currentItem: Item): void{
    console.log(currentItem);
    if (currentItem.id != null) {
      console.log('update');
      this.updateItem(currentItem);
    } else {
      console.log('create');
      this.createItem(currentItem);
    }
  }

  createItem(item: Item){

  }

  updateItem(item: Item){

  }


}
