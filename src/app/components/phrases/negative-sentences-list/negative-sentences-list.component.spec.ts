import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeSentencesListComponent } from './negative-sentences-list.component';

describe('NegativeSentencesListComponent', () => {
  let component: NegativeSentencesListComponent;
  let fixture: ComponentFixture<NegativeSentencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeSentencesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeSentencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
