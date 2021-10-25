import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../app/models/post.model'

@Injectable({
  providedIn: 'root'
})
export class FakeUsersService {

  constructor(private hc: HttpClient) {  }

  getUsersData(): Observable<Post[]> {
    return this.hc.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostData(id: any): Observable<Post> {
    return this.hc.get<Post>("https://jsonplaceholder.typicode.com/posts/"+id)
  }

}
 