import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Item} from '../../../model/item.model';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class ItemService {

  allItem: Item[];

  itemsUrl: string = 'http://localhost:3000/Item';

  currentItem: Item = {
    id: null,
    title: '',
    status: ''
  };

  constructor(
    private http: HttpClient
  ) {
  }

  getAllItem(): Subscription {
    return this.http.get<Item[]>(this.itemsUrl, headerOption).subscribe(
      (data: Item[]) => {
        this.allItem = data;
        console.table(this.allItem);
      });
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(this.itemsUrl + '/' + id, headerOption);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, headerOption);
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(this.itemsUrl + '/' + item.id, item, headerOption);
  }
}
