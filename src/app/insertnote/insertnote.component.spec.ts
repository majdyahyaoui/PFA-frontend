import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertnoteComponent } from './insertnote.component';

describe('InsertnoteComponent', () => {
  let component: InsertnoteComponent;
  let fixture: ComponentFixture<InsertnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
