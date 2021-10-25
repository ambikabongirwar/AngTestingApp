import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeUsersService } from '../fake-users.service';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  posts: Post = {userId: 0, id: 0, title: '', body: ''};

  constructor(private ar: ActivatedRoute, private fs: FakeUsersService) { }

  ngOnInit(): void {
    let id = this.ar.snapshot.params.id;
    this.fs.getPostData(id).subscribe(
      obj => {
        this.posts = obj;
        console.log("Object is ", obj);
      },
      err => {
        console.log("Err is ", err);
      }
    )
  }

}
