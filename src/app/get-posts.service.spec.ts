import { TestBed, inject } from '@angular/core/testing';
import { GetPostsService } from './get-posts.service';
import { HttpClientModule } from '@angular/common/http';

describe('GetPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [GetPostsService, HttpClientModule]
    });
  });

  it('should be created', inject([GetPostsService], (service: GetPostsService) => {
    expect(service).toBeTruthy();
  }));

});
