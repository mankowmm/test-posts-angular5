import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPostsService } from '../get-posts.service';
import { Post } from '../model/post';
import { ErrorHandlerComponent } from '../error-handler/error-handler.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  private currentPostId: string;
  private post: Post;
  private loaded: boolean;
  constructor(private route: ActivatedRoute, private getPostService: GetPostsService, private errorHandler: ErrorHandlerComponent) {
    this.route.params.subscribe( params => {
      this.currentPostId = params.postId;
    });
  }

  ngOnInit() {
    this.getPostService.getSinglePost(this.currentPostId)
    .then((post: Post) => {
      this.post = post;
      this.loaded = true;
    })
    .catch((error) => {
      this.errorHandler.openModal('Wystapil blad - prosimy sprobowac pozniej', JSON.stringify(error.message));
    });
  }

}
