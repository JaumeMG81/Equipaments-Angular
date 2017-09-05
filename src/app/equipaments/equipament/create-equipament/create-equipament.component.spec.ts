import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipamentComponent } from './create-equipament.component';

describe('CreateEquipamentComponent', () => {
  let component: CreateEquipamentComponent;
  let fixture: ComponentFixture<CreateEquipamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEquipamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEquipamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
