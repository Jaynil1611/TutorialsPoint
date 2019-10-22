import { TestBed, inject } from '@angular/core/testing';

import { FireauthService } from './fireauth.service';

describe('FireauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireauthService]
    });
  });

  it('should be created', inject([FireauthService], (service: FireauthService) => {
    expect(service).toBeTruthy();
  }));
});
