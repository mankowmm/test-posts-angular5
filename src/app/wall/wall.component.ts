import { Component, OnInit } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { GetPostsService } from '../get-posts.service';
import { Post } from '../model/post';
import { ErrorHandlerComponent } from '../error-handler/error-handler.component';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.less']
})
export class WallComponent implements OnInit {

  private posts: Post[];
  private searchPhrase: string;
  constructor(private getPostService: GetPostsService, private errorHandler: ErrorHandlerComponent) { }

  ngOnInit() {
    this.getPostService.getAllPosts()
    .then((posts: Post[]) => {
      this.posts = posts;
    })
    .catch((error) => {
      this.errorHandler.openModal('Wystapil blad - prosimy sprobowac pozniej', JSON.stringify(error.message));
    });
  }

  handleSearchPosts(searchPhrase: string): void {
    this.searchPhrase = searchPhrase;
  }

}
