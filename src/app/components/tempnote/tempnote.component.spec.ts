import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempnoteComponent } from './tempnote.component';

describe('TempnoteComponent', () => {
  let component: TempnoteComponent;
  let fixture: ComponentFixture<TempnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
