import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './model/post';

@Pipe({
  name: 'filter'
})
export class PostFilterPipe implements PipeTransform {
  transform(posts: Post[], searchText: string): any[] {
    if (!posts) {
        return [];
    }
    if (!searchText) {
        return posts;
    }
    searchText = searchText.toLowerCase();
    return posts.filter( post => {
        const foundInTitle = post.title.toLowerCase().includes(searchText);
        const foundInBody = post.body.toLowerCase().includes(searchText);
      return foundInTitle || foundInBody;
    });
   }
}
