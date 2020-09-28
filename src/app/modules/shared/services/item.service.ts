import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../../../model/item.model';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application.json'})
};

@Injectable()

export class ItemService {

  itemsUrl = 'http://localhost:3000/item';

  currentItem: Item = {
    id: null,
    title: '',
    status: ''
  };

  constructor(
    private http: HttpClient
  ) { }

  getAllItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemsUrl, headerOption);
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(this.itemsUrl + '/' + id, headerOption);
  }
}
