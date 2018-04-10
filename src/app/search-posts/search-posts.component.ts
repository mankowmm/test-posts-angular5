import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.less']
})
export class SearchPostsComponent implements OnInit {

  @Output() searchTextUpdated: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  onSearchChange(searchValue: string ) {
    this.searchTextUpdated.emit(searchValue);
  }

  ngOnInit() {
  }
}
