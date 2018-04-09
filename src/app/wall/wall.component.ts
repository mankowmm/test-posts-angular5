import { Component, OnInit } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { GetPostsService } from '../get-posts.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  private posts: Post[];
  constructor(private getPostService: GetPostsService) { }

  ngOnInit() {
    this.getPostService.getAllPosts().then((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
