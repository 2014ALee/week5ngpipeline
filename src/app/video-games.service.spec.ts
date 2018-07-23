import { TestBed, inject } from '@angular/core/testing';

import { VideoGamesService } from './video-games.service';

describe('VideoGamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoGamesService]
    });
  });

  it('should be created', inject([VideoGamesService], (service: VideoGamesService) => {
    expect(service).toBeTruthy();
  }));
});
