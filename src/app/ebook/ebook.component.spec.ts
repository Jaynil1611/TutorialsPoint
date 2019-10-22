import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookComponent } from './ebook.component';

describe('EbookComponent', () => {
  let component: EbookComponent;
  let fixture: ComponentFixture<EbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
