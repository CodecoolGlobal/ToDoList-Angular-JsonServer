import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../shared/services/item.service';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

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
