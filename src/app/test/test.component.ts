import { Component, OnDestroy, OnInit } from '@angular/core';
import {Post} from '../models/post.model';
import {FakeUsersService} from '../fake-users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  mySubscription: any;
  posts: Post[] = [];

  constructor(private fsObj: FakeUsersService) { }

  ngOnInit(): void {
    this.mySubscription = this.fsObj.getUsersData().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts);
      },
      err => {
        console.log("err is ", err);
      }
    )
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

} 
