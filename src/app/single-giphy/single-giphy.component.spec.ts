import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglGiphyComponent } from './single-giphy.component';

describe('SinglGiphyComponent', () => {
  let component: SinglGiphyComponent;
  let fixture: ComponentFixture<SinglGiphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglGiphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglGiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
