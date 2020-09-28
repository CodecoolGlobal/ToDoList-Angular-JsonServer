import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../shared/services/item.service';
import {Item} from '../../../model/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  allItem: Item[];

  constructor(
    private itemService: ItemService,
  ) {
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(): void {
    this.itemService.getAllItems().subscribe(
      (data: Item[]) => {
        this.allItem = data;
      }
    );
  }

  deleteItem(id: number): void{
    // console.log(id);
    this.itemService.deleteItem(id).subscribe(
      (data: Item) => {
        this.getAllEmployee();
      }
    );
  }
  editItem(item): void {
    this.itemService.currentItem = Object.assign({}, item);
  }
}
