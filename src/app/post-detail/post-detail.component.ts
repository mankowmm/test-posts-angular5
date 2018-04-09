import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPostsService } from '../get-posts.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  private currentPostId: string;
  private post: Post;
  constructor(private route: ActivatedRoute, private getPostService: GetPostsService) {
    this.route.params.subscribe( params => {
      this.currentPostId = params.postId;
    });
  }

  ngOnInit() {
    this.getPostService.getSinglePost(this.currentPostId).then((post: Post) => {
      this.post = post;
    });
  }

}
