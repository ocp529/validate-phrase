import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeSentencesComponent } from './negative-sentences.component';

describe('NegativeSentencesComponent', () => {
  let component: NegativeSentencesComponent;
  let fixture: ComponentFixture<NegativeSentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeSentencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
