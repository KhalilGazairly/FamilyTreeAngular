import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsTreeComponent } from './persons-tree.component';

describe('PersonsTreeComponent', () => {
  let component: PersonsTreeComponent;
  let fixture: ComponentFixture<PersonsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
