import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageComponentComponent } from './sub-page-component.component';

describe('SubPageComponentComponent', () => {
  let component: SubPageComponentComponent;
  let fixture: ComponentFixture<SubPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
