import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUpdateTrafficComponent } from './news-update-traffic.component';

describe('NewsUpdateTrafficComponent', () => {
  let component: NewsUpdateTrafficComponent;
  let fixture: ComponentFixture<NewsUpdateTrafficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsUpdateTrafficComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsUpdateTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
