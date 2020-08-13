import { TestBed, inject } from '@angular/core/testing';

import { GoogleSentimentApiNewService } from './google-sentiment-api-new.service';

describe('GoogleSentimentApiNewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleSentimentApiNewService]
    });
  });

  it('should be created', inject([GoogleSentimentApiNewService], (service: GoogleSentimentApiNewService) => {
    expect(service).toBeTruthy();
  }));
});
