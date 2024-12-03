import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBikeComponent } from './search-bike.component';

describe('SearchBikeComponent', () => {
  let component: SearchBikeComponent;
  let fixture: ComponentFixture<SearchBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
