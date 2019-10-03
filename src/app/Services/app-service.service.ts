import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root'
})
export class AppService {

  constructor(
      private http: HttpClient,
      private store: Store<any>
      ) { }

    searchForGiphy(searchQuery = "laugh", limit = 25, offset = 0): Observable<any> {
      return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${searchQuery}&limit=${limit}&offset=${offset}&lang=en`);
  }

    fetchSingleGiphy(id): Observable<any> {
        return this.http.get(`https://api.giphy.com/v1/gifs/${id}?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc`);
    }

    getAppState(): Observable<any> {
        return this.store.select('giphyState');
    }

    modifyAppState(action) {
        this.store.dispatch(action);
    }

}
