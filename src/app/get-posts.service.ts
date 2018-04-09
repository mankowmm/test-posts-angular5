import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Post } from './model/post';

@Injectable()
export class GetPostsService {

  private static HTTP_GET_POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  public getAllPosts () {
    const promise = new Promise((resolve, reject) => {
    this.http.get(GetPostsService.HTTP_GET_POSTS_ENDPOINT)
        .toPromise()
        .then(
          res => {
            const posts: Post[] = this.buildPosts(res);
            resolve(posts);
          }
        );
    });
    return promise;
  }

  public getSinglePost (postId: string) {
    const promise = new Promise((resolve, reject) => {
    this.http.get(GetPostsService.HTTP_GET_POSTS_ENDPOINT + '/' +  postId)
        .toPromise()
        .then(
          res => {
            const post = this.buildSinglePost(res);
            resolve(post);
          }
        );
    });
    return promise;
  }

  private buildSinglePost(postFromHttp: any) {
    const post = new Post(postFromHttp.id, postFromHttp.userId, postFromHttp.title, postFromHttp.body);
    return post;
  }

  private buildPosts (httpPostsArray): Post[] {
    const posts: Post[] = [];
    for (const postHttp of httpPostsArray) {
      const post = this.buildSinglePost(postHttp);
      posts.push(post);
    }
    return posts;
  }

}
